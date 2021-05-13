from flask import Flask, request, jsonify, Response, abort, render_template
from flask_cors import CORS
from functools import wraps
from libs.db import mysql
import sys, json, random

# 어플리케이션 생성
app = Flask(__name__)
# CORS 설정(프록시)
CORS(app)
# MySQL에 연결
db = mysql.Database()
pblst = [i for i in range(1, 824)]


def as_json(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        res = f(*args, **kwargs)
        res = json.dumps(res, ensure_ascii=False).encode('utf8')
        return Response(res, content_type='application/json; charset=utf-8')
    return decorated_function

@app.route("/")
def index():
    return "Hello goorm!"


@app.route('/hello')
def hello():
    return render_template('./hello.html')

    
# /getScoreList
@app.route('/getScoreList', methods = ['GET'])
@as_json
def getScoreList():
    sql = """SELECT NICK, SCORE FROM USERS ORDER BY SCORE DESC;"""
    sqlRes = db.executeAll(sql)
    return sqlRes

# /getQuizList
@app.route('/getQuizList', methods = ['GET'])
@as_json
def getQuizList():
    res = []
    num = request.args.get('num')
    ids = random.sample(pblst, int(num))
    
    ids = map(str, ids)
    strids = ",".join(ids)
    strids = "(" + strids + ")"
    ### for문으로 query 날리는 방식 ###
    # for _id in ids:
    #     sql = """SELECT * FROM PROBLEMS WHERE ID={}""".format(_id)
    #     sqlRes = db.executeAll(sql)
    #     # 문제 설명
    #     pb = sqlRes[0]['PB']
    #     # 보기들
    #     choices = []
    #     ansIdx = -1
    #     for idx, obj in enumerate(sqlRes):
    #         choices.append(obj['CHOICE'])
    #         if obj['ANS'] == True:
    #             ansIdx = idx
    #     res.append({"PB": pb, "CHOICES": choices, "ANS": ansIdx})
    
    ### 쿼리문 사용하는 방법 ###
    sql = """SELECT * FROM PROBLEMS WHERE PROBLEMS.ID IN {}""".format(strids)
    sqlRes = db.executeAll(sql)
    _id = -1
    pb = ''
    choices = []
    ansIdx = -1
    for obj in sqlRes:
        # 문제가 바뀌었으면
        if _id != obj['ID']:
            # 만약 보기를 담은 리스트 choices가 전 문제에 대한 보기들을 담고 있었다면
            if len(choices) != 0:
                res.append({"PB": pb, "CHOICES": choices, "ANS": ansIdx})
                # choices 리스트 비우기
                choices = []
            # 문제 갱신
            _id = obj['ID']
            pb = obj['PB']p
        # 문제가 바뀌든지 말던지 choice는 계속 append
        choices.append(obj['CHOICE'])
        # ansewr 기록
        if obj['ANS'] == True:
            ansIdx = len(choices)-1
    
    if len(choices) != 0:
        res.append({"PB": pb, "CHOICES": choices, "ANS": ansIdx})
        
        
    
    return res

    
# /insertUser
# 1. 해당 email인 사용자가 없음 -> insert 해야 함
# 2. 해당 email인 사용자가 존재함
    # 1) 새로 들어온 점수가 기존 점수보다 더 크거나 같음 -> nick, SCORE UPDATE
    # 2) 그렇지 않음 -> UPDATE하지 않음.
@app.route('/insertUser', methods = ['POST'])
@as_json
def insertUser():
    try:
        reqname = request.form['name']
        reqemail = request.form['email']
        reqscore = request.form['score']
        query = """INSERT INTO USERS(EMAIL, NICK, SCORE) VALUES(%s, %s, %s) 
                    ON DUPLICATE KEY UPDATE 
                        NICK = IF(USERS.SCORE <= VALUES(SCORE), VALUES(NICK), USERS.NICK), 
                        SCORE = IF(USERS.SCORE <= VALUES(SCORE), VALUES(SCORE), USERS.SCORE);
                """
        params = (reqemail, reqname, reqscore)
        sqlRes = db.executeAll(query, params)
    except Exception as E:
        return {'status_code' : 400, 'result' : False}
    else:
        db.commit()
        return {'status_code' : 200, 'result' : True}


if __name__ == "__main__":
    print(sys.argv[0])
    app.run(host='0.0.0.0', port=int(sys.argv[1]))
    


