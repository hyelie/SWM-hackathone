import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container';
import backgroundBuildingImg from "../images/building.png"
import backgroundkingImg from "../images/king.png"
import GameStart from "../components/gameStart";
import AlertNotice from "../components/AlertNotice";
import ModeSelector from "../components/modeSelector";
import QuizForm from "../components/QuizForm";

function Main() {
  const [isGame, setIsGame] = useState(false);
  const [mode, setMode] = useState("normal");
  const [lifeCount,setLifeCount]=useState(2);
  const [timer,setTimer]=useState(10);
  return (
    <div>
      <AlertNotice />
      {!isGame &&
      <div id="backgroundContainer">
        <div id="center">
          <img id="backgroundKing" src={backgroundkingImg}></img>
          <img id="backgroundBuilding" src={backgroundBuildingImg}></img>
        </div>
        <ModeSelector mode={mode} onChangeMode={(mode) => setMode(mode)}/>
        <GameStart isGame={isGame} mode={mode} onChangeGame={setIsGame} />
      </div>
      }
      {isGame && <QuizForm lifeCount={lifeCount} mode={mode} onDeclineLife={setLifeCount}/>}
    </div>
    
  );
}

export default Main;
