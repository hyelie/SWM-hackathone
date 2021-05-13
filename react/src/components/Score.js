import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            
            <div className='score'>점수: {this.props.point}점</div>
            
        );
    }
}   

export default Score;