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
    return null;
  });
  return dataArr;
}

const CompDisplay = ({listHome=[], dataType=[], frequency, graphType, filter}) => {
  const list = getList(listHome, frequency);
  // console.log("print LIST IN COMP DISPLAY");
  // console.log(list);
  if(list){
    const dataArr = getDataArray(list, dataType);
    return <RenderComp dataType={dataType} list={dataArr} filter={filter}/>
  }
  return <div> not loading list</div>

}

CompDisplay.propTypes = {
  dataType: PropTypes.array,
};

export default CompDisplay;
