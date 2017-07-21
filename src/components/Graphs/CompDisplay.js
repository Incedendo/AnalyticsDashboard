import React from 'react';
import {RenderComp} from './RenderComp';

export const CompDisplay = (props) => {
  var list = [];
  switch(props.frequency) {
    case 'MTD':
      list = props.list[1];
      break;
  }
  var data = [];
  switch(props.dataType){
    case "Registrations":
      data = list.map(({totalVisits}) => totalVisits);
      break;
    case "Enrollments":
      data = list.map(({uniqueVisits}) => uniqueVisits);
      break;
    case "Unique User Login":
      data = list.map(({returnVisits}) => returnVisits);
      break;
    case "Contribution Changes":
      data = list.map(({signUps}) => signUps);
      break;
    case "Top Active Pages":
      data = list.map(({signIns}) => signIns);
      break;
    case "Retirement Income Calc Usage":
      data = list.map(({contributionChange}) => contributionChange);
      break;
    case "Top Pages":
      data = list.map(({allocationChange}) => allocationChange);
      break;
  }

  return <RenderComp dataType={props.dataType} list={list} />
}
