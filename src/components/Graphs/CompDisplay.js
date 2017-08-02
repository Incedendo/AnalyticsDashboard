import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';

const getList = (listHome, frequency) => {
  switch(frequency) {
    case 'annually':
      return listHome[0];
    case 'quarterly':
      return listHome[1];
    case 'weekly':
      return listHome[2];
    case 'daily':
      return listHome[3];
  }
}

const getDataArray = (list, dataType) => {
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
      case "Contribution Change":
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
      case "Total Visits":
        dataArr[index] = list.map(({totalVisits}) => totalVisits);
        break;
      case "Unique Visits":
        dataArr[index] = list.map(({uniqueVisits}) => uniqueVisits);
        break;
      case "Page Views":
        dataArr[index] = list.map(({PageViews}) => PageViews);
        break;
      case "Sign Ups":
        dataArr[index] = list.map(({signUps}) => signUps);
        break;
      case "Sign Ins":
        dataArr[index] = list.map(({signIns}) => signIns);
        break;
    }
    return null;
  });
  return dataArr;
}

const CompDisplay = ({listHome=[], graphType, dataType=[], frequency, filter}) => {
  const list = getList(listHome, frequency);
  const dataArr = getDataArray(list, dataType);
  return <RenderComp dataType={dataType} list={dataArr} filter={filter}/>
}

CompDisplay.propTypes = {
  dataType: PropTypes.array,
};

export default CompDisplay;
