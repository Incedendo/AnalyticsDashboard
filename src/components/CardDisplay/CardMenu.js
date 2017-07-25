import React, { Component } from 'react';
import {DisplayCards} from './DisplayCards';

export const CardMenu = (props) => {
  return (
    <div className="row display"> 
      <DisplayCards num={8} list={props.list}/>
    </div>
  )
}
