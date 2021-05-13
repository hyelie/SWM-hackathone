import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container';
import backgroundBuildingImg from "../images/building.png"
import backgroundkingImg from "../images/king.png"
function Main() {

  return (
    <div>
      <div id="backgroundContainer">
        <div id="center">
        <img id="backgroundKing" src={backgroundkingImg}></img>
        <img id="backgroundBuilding" src={backgroundBuildingImg}></img>
      </div>
      </div>
    </div>
  );
}

export default Main;
