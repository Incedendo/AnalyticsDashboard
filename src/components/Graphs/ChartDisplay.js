import React from 'react'
import RenderChart from './RenderChart';
import RenderComp from './RenderComp';

import PropTypes from 'prop-types';

/*
  Depending on whether the display of data is dependent on frequency or categorical representation, this method will return an array of objects of the specific frequency or categorical data.
*/

const getList = (listHome, frequency, categorical, dataType) => {
  console.log(listHome, frequency, categorical, dataType);
  if(categorical){
      switch(dataType[0]){
        case 'Bounce Rate':
          return listHome[4].slice(0,26)
        case 'Top Pages':
          return listHome[5].slice(0,26)
        case "Visits by Device Type":
          return listHome[6].slice(0,26);
      }
  }else {
    switch(frequency) {
      case 'annually':
        return listHome[0];
      case 'quarterly':
        return listHome[1];
      case 'monthly':
        //console.log(listHome[2]);
        return listHome[2];
      case 'daily':
        return listHome[3];
    }
  }
}

/*
  Depending on the names in the dataType array, it will extract the respective data into an array. If there are multiple dataTypes, each index of the array returned will be an array of the data corresponding to the same index of the dataType array.
*/

const getDataArray = (list, dataType) => {
  var dataArr = [];
  //console.log(list);
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
        dataArr[index] = list.slice(0,10).map(({Percentage}) => parseFloat(Percentage.substring(0, Percentage.length-1)));
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
      case "Visits by Device Type":
        dataArr[index] = list.map(({percentage}) => percentage);
        break;
      case "Bounce Rate":
        dataArr[index] = list.slice(0,10).map(({Percentage}) => parseFloat(Percentage.substring(0, Percentage.length-1)));
        break;
    }
    return null;
  });
  return dataArr;
}

const ChartDisplay = ({listHome=[],frequency, graphType, dataType=[], categorical,chartHeight, width, margin, marginTop, yAxisTextSize, xAxisTextSize, pointRadius, legendFontSize, displayedLegend, filter }) => {

  const list = getList(listHome, frequency, categorical, dataType);
  const dataArr = getDataArray(list, dataType);

  //If there is a graph type, there will be a regular chart (i.e. Bar, pie, etc..)
  if(graphType) {
    return <RenderChart
            categorical={categorical}
            dataType={dataType}
            dataArr={dataArr}
            graphType={graphType}
            list={list}
            height={chartHeight} width={width} margin={margin}
            yAxisTextSize={yAxisTextSize}
            xAxisTextSize={xAxisTextSize}
            pointRadius={pointRadius}
            legendFontSize={legendFontSize}
            displayedLegend={displayedLegend}
            marginTop={marginTop}
           />
  }else {
    return <RenderComp dataType={dataType} dataArr={dataArr} filter={filter}/>
  }
}

// ChartDisplay.propTypes= {
//   dataType: PropTypes.array.isRequired,
//   height: PropTypes.string
// };

export default ChartDisplay;

// getDataArray can just return the map
//
// ChartDisplay should have it's parameters newlined. That thing is off the
// page! in fact, it looks like a lot of those props can be put into ...rest and
// then passed into <RenderChart /> The only props you actually need are
// dataType, dataArr, filter, and chartHeight
