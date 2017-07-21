import React from 'react'
import {RenderChart} from './RenderChart'

export const ChartDisplay = (props) => {
  var list = [];
  switch(props.frequency) {
    case 'annually':
      list = props.list[0];
      break;
    case 'quarterly':
      list = props.list[1];
      break;
    case 'daily':
      list = props.list[2];
      break;
  }

  return <RenderChart dataType={props.dataType} graphType={props.graphType} list={list} />
}
