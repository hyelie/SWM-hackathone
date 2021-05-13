import React, { Component } from 'react';
import heart from "../images/heart.png";

class Life extends Component {
    
    render() {
        return (
            <>
                <img className='heart' src={heart}/>
                <span className='heartfont'>X {this.props.lifeCount}</span>
            </>
        );
    }
}

export default Life;