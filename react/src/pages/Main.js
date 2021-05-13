import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container';
import backgroundBuildingImg from "../images/building.png"
import backgroundkingImg from "../images/king.png"
import backgroundFireImg from "../images/fire.png"
import GameStart from "../components/gameStart";
import AlertNotice from "../components/AlertNotice";
import QuizForm from "../components/QuizForm";

function Main() {
  const [isGame, setIsGame] = useState(false);
  const [mode, setMode] = useState("normal");
  const [lifeCount,setLifeCount]=useState(2);
  const [isEnding, setIsEnding] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [timer,setTimer]=useState(10);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  })
  function onDeclineLife() {
    console.log(lifeCount)
    if (lifeCount == 2) {
      setLifeCount(1)
      console.log(lifeCount)
    }
    else if (lifeCount == 1) {
      setIsEnding(true)
      setLifeCount(null)
    }
    console.log(lifeCount)
  }
  return (
    <div>
      <AlertNotice />
      {!isGame &&
      <div id="backgroundContainer">
        <div id="center">
          <img id="backgroundBuilding" src={backgroundBuildingImg} fluid></img>
          <img id="backgroundKing" src={backgroundkingImg} fluid ></img>
        </div>
        <GameStart isGame={isGame} mode={mode} onChangeGame={setIsGame} />
      </div>
      }
      {isGame && <QuizForm isEnding={isEnding} lifeCount={lifeCount} mode={mode} onDeclineLife={onDeclineLife} onChangeGame={setIsGame} />}
    </div>
    
  );
}

export default Main;
