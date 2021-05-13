import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            
            <span>점수: {this.props.point}점</span>
            
        );
    }
}   

export default Score;