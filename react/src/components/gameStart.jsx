import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
class GameStart extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
    

    render() {
        return (
          <>
          {/* {this.props.mode == "normal" ? 
            <Button id={`gameStart${this.props.mode}`} className="gameStart" onClick={()=> this.props.onChangeGame(true)} >
                게임시작
            </Button> :
            <Button id={`gameStart${this.props.mode}`} className="gameStart" onClick={()=> this.props.onChangeGame(true)} >
                게임시작
            </Button>
            } */}
            <Button className="gameStart" variant="contained" color="primary" onClick={()=> this.props.onChangeGame(true)} >
                게임시작
            </Button>
          </>   
          ); 
        }
}

export default GameStart;