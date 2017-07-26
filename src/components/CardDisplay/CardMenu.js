import React, { Component } from 'react';
import {DisplayCards} from './DisplayCards';

export const CardMenu = (props) => {
  return (
      <DisplayCards num={8} list={props.list}/>
  )
}
