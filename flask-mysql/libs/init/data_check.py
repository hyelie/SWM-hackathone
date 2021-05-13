import pandas as pd
from libs.db import mysql

f = open('check.txt', 'w')
db = mysql.Database()

query = """SELECT * FROM PROBLEMS;"""
Qresult = db.executeAll(query)

print(Qresult[0])

for i in Qresult:
    f.write(str(i))
    f.write('\n')




        