import React, { Component } from 'react';
import CardContainer from './CardContainer';
import '../../assets/scss/include.scss';
import { defaultEightCards } from '../../assets/JSON/CardData';

const DisplayCards = (props) => {
  return (
    <div className="container noMargin bottomCardDiv">
      <div className="row display">
        {defaultEightCards.map((card, index) => (
          <CardContainer {...card} key={index} list={props.list}/>
        ))}
      </div>
    </div>
  )
}

export default DisplayCards;
