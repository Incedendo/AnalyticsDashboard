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
// this component should be a pure component
// the logic inside componentWillMount could be done on render or rather should
// be done in an extracted function. Also, what the heck is happening there? is
// arr even used?
