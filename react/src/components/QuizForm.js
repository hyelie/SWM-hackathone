import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import QuizList from "./QuizList";
import { getQuizList } from "../actions";
import Life from "./Life";
import UserInputForm from "./UserInputForm";
import Score from "./Score";
import Timer from './Timer';
import Container from '@material-ui/core/Container';

export default function QuizForm({lifeCount,onDeclineLife, mode, onChangeGame, isEnding}) {
  const [quizList,setQuizList] = useState(null);
  const [isAnswer, setIsAnswer] = useState(null);
  const [num, setNum] = useState(0);
  const [point, setPoint] = useState(0);
  const [selectNum, setSelectNum] = useState(null);
  const [progress, setProgress] = useState(100);
  const [isTimeOut, setIsTimeOut] = useState(null);
  useEffect(() => {
    if (!quizList) {
    getQuizList(99).then((response) => {
      setQuizList(response);
    })
  } else { 
    if (isTimeOut == true) {
      wrongAnswer()
      answerProcess()
      setIsTimeOut(null)
    }
  }
  }, [isTimeOut])
  
  function wrongAnswer() {
    setIsAnswer(false)
    onDeclineLife()
  }
  function answerProcess() {
    setTimeout(()=> {  
      setNum(num+1);
      setIsAnswer(null);
      setSelectNum(null);
      setProgress(100)
      console.log(isEnding)
      console.log(isAnswer)
    }, 2000)
  }

  function handleProgress() {
    wrongAnswer()
    answerProcess()
  }

  function selectedAnswer(val) {
    if (val == quizList[num].ANS) {
      setIsAnswer(true)
      setPoint(point + 10);
    } else {
      wrongAnswer()
    }
    setSelectNum(val)
    answerProcess()
  }
  
  return (
    <Container >
      <div className='lifeAndScore'>
        <Life lifeCount={lifeCount}/>
        <Score point={point}/>
      </div>
      
      {quizList &&
        <>
        {lifeCount  && !selectNum&& <Timer selectNum={selectNum} isAnswer={isAnswer} setIsTimeOut={setIsTimeOut} selectNum={selectNum} isAnswer={isAnswer} progress={progress} setProgress={setProgress} selectedAnswer={selectedAnswer}/>}
        {!lifeCount && <div id="quizspace"></div>}
        <Paper id="quizForm" elevation={3}>
          {isEnding && (isAnswer === null) ?
          <UserInputForm score={point} onChangeGame={onChangeGame} />
          :
          <>
          <div id="quizHeader">
            <Typography variant="h6">문제{num+1}. {quizList[num].PB}</Typography>
            </div>
            <QuizList selectNum={selectNum} isAnswer={isAnswer} answer={quizList[num].ANS} selectedAnswer={selectedAnswer} choices={quizList[num].CHOICES}  />
          </>        
          }
          </Paper>
          </>
      }
    </Container>
  );
}