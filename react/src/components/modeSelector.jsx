import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
class ModeSelector extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <>
            <ButtonGroup id="modeSelector" fullWidth={true} color="primary" aria-label="large outlined primary button group">
                {this.props.mode == "normal" ? <Button variant="contained"  onClick={() => this.props.onChangeMode("normal")}>연습문제</Button> :<Button  onClick={() => this.props.onChangeMode("normal")}>연습문제</Button>}
                {this.props.mode == "rank" ? <Button variant="contained"  onClick={() => this.props.onChangeMode("rank")}>경쟁전</Button> :<Button  onClick={() => this.props.onChangeMode("rank")}>경쟁전</Button>}
            </ButtonGroup>
            </>
        );     
    }
}

export default ModeSelector;

