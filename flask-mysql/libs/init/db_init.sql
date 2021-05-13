# CREATE DATABASE GAME;

USE GAME;

CREATE TABLE IF NOT EXISTS PROBLEMS(
    ID        INT(5)        NOT NULL,
    PB        TEXT          NOT NULL,
    CHOICE    TEXT          NOT NULL,
    ANS       BOOLEAN
) DEFAULT CHARSET=UTF8;

CREATE TABLE IF NOT EXISTS USERS(
    EMAIL     VARCHAR(50)   NOT NULL    PRIMARY KEY,
    NICK      TEXT          NOT NULL,
    SCORE     INT(11)       NOT NULL
) DEFAULT CHARSET=UTF8;

-- insertUser QUERY
-- %s 자리에 순서대로 EMAIL, NICK, SCORE 순서대로 인수 넣어주면 됨.
-- 1. 해당 email인 사용자가 없음 -> insert 해야 함
-- 2. 해당 email인 사용자가 존재함
    -- 1) 새로 들어온 점수가 기존 점수보다 더 크거나 같음 -> nick, SCORE UPDATE
    -- 2) 그렇지 않음 -> UPDATE하지 않음.
# INSERT INTO USERS(EMAIL, NICK, SCORE) VALUES(%s, %s, %s)
#     ON DUPLICATE KEY UPDATE 
#         NICK = IF(USERS.SCORE <= VALUES(SCORE), VALUES(NICK), USERS.NICK),
#         SCORE = IF(USERS.SCORE <= VALUES(SCORE), VALUES(SCORE), USERS.SCORE);

-- 문제 개수 출력
# SELECT COUNT(*) FROM PROBLEMS;

-- getScoreList QUERY
-- %s 자리에 몇 개 출력할건지 인수 하나 넣으면 됨.
# SELECT * FROM USERS ORDER BY SCORE DESC LIMIT (%s);

-- getQuizList Query
-- %s 자리에 random.sample()로 뽑은 문제 번호를 보내면 됨.
# SELECT * FROM PROBLEMS WHERE PROBLEMS.ID IN (%s);