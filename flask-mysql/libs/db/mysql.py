import pymysql
import json


class Database():
    def __init__(self):
        cfg = ''
        # with open('../../config/db.json', 'r') as f:
        with open('./config/db.json', 'r') as f:
            cfg = json.load(f)['mysql']
        self.db = pymysql.connect(
            host=cfg['host'],
            user=cfg['user'],
            password=cfg['password'],
            db=cfg['database']
            # charset='utf-8'
        )
        self.cursor = self.db.cursor(pymysql.cursors.DictCursor)

    def execute(self, query, args={}):
        self.cursor.execute(query, args)

    def executeOne(self, query, args={}):
        self.cursor.execute(query, args)
        row = self.cursor.fetchone()
        return row

    def executeAll(self, query, args={}):
        self.cursor.execute(query, args)
        row = self.cursor.fetchall()
        return row

    def commit(self):
        self.db.commit()
