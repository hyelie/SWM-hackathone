import pandas as pd
from libs.db import mysql


# type(data): pandas.Dataframe
data = pd.read_csv('./data.csv', encoding='utf-8')
db = mysql.Database()

for i, r in data.iterrows():
    problemId = r['문제키값']
    problemDesc = r['문제']
    choice = r['보기정보']
    answer = r['정답여부']
    if type(answer) == type("str"):
        answer = "true"
    else:
        answer = "false"
    
    try:
        sql = """INSERT INTO PROBLEMS VALUES({}, "{}", "{}", {})""".format(problemId, problemDesc, choice, answer)
        db.executeAll(sql)
        db.commit()
        
    except Exception as e:
        print(e)
        
        