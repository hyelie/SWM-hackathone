import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import QuizList from "./QuizList";
import { getQuizList } from "../actions";
import Life from "./Life";
import UserInputForm from "./UserInputForm";
import Score from "./Score";


export default function QuizForm({lifeCount,onDeclineLife, mode, onChangeGame}) {
  const [quizList,setQuizList] = useState(null);
  const [isAnswer, setIsAnswer] = useState(null);
  const [num, setNum] = useState(0);
  const [point, setPoint] = useState(0);
  const [isEnding, setIsEnding] = useState(false);
  const [selectNum, setSelectNum] = useState(null);
  useEffect(() => {
    getQuizList(100).then((response) => {
      setQuizList(response);
    })
  }, [])
  
  
  
  function selectedAnswer(val) {
    if (val == quizList[num].ANS) {
      setIsAnswer(true)
      setPoint(point + 10);
    } else {
      setIsAnswer(false)
      onDeclineLife(lifeCount-1)
  }
  setSelectNum(val)
  setTimeout(()=> {  
    if (lifeCount-1 == 0) {
      setIsEnding(true);
    }  
    setNum(num+1)
    setIsAnswer(null);
    setSelectNum(null);
  }, 2000)
  }
  
  return (
    <>
      <div className='lifeAndScore'>
      <Life lifeCount={lifeCount} />
      <Score point={point}/>
      </div>
      {quizList &&
        <Paper id="quizForm" elevation={3}>
          {isEnding ?
          <UserInputForm score={point} onChangeGame={onChangeGame} />
          :
            <>
          <div>
            <Typography variant="h6">{quizList[num].PB}{quizList[num].ANS}</Typography>
            </div>
            <QuizList selectNum={selectNum} isAnswer={isAnswer} answer={quizList[num].ANS} selectedAnswer={selectedAnswer} choices={quizList[num].CHOICES}  />
          </>        
          }
          </Paper>
      }
    </>
  );
}