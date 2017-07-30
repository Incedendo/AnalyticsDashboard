import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';

const CompDisplay = ({listHome=[], graphType, dataType=[], frequency, filter}) => {

  var list = [];
  switch(frequency) {
    case 'annually':
      list = listHome[0]
      break;
    case 'quarterly':
      list = listHome[1];
      break;
    case 'weekly':
      list = listHome[2];
      break;
    case 'daily':
      list = listHome[3];
      break;
  }
  var dataArr = [];
  dataType.map((stat, index) =>{
    switch(stat){
      case "Registrations":
        dataArr[index] = list.map(({totalVisits}) => totalVisits);
        break;
      case "Enrollments":
        dataArr[index] = list.map(({uniqueVisits}) => uniqueVisits);
        break;
      case "Unique User Login":
        dataArr[index] = list.map(({PageViews}) => PageViews);
        break;
      case "Contribution Changes":
        dataArr[index] = list.map(({signUps}) => signUps);
        break;
      case "Top Active Pages":
        dataArr[index] = list.map(({signIns}) => signIns);
        break;
      case "Retirement Income Calc Usage":
        dataArr[index] = list.map(({contributionChange}) => contributionChange);
        break;
      case "Top Pages":
        dataArr[index] = list.map(({allocationChange}) => allocationChange);
        break;
    }
  });
  return <RenderComp dataType={dataType} list={dataArr} filter={filter}/>
}

CompDisplay.propTypes = {
  dataType: PropTypes.array,
};

export default CompDisplay;
