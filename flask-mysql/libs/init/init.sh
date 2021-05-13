# in goorm ide
service mysql start

# input command line below:
# mysql
# CREATE DATABASE GAME;
mysql -u root -p GAME < db_init.sql


# 계정 비밀번호 변경
# mysql
# alter user 'root'@'localhost' identified with mysql_native_password by '변경후 비밀번호';