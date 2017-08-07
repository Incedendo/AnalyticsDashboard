import React from 'react'
import RenderChart from './RenderChart';
import RenderComp from './RenderComp';

import PropTypes from 'prop-types';

const getList = (listHome, frequency, categorical, dataType) => {
  if(categorical){
      switch(dataType[0]){
        case "Visits by Device Type":
          return listHome[6];
      }
  }else {
    switch(frequency) {
      case 'annually':
        return listHome[0];
      case 'quarterly':
        return listHome[1];
      case 'monthly':
        return listHome[2];
      case 'daily':
        return listHome[3];
    }
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
      case "Visits by Device Type":
        dataArr[index] = list.map(({percentage}) => percentage);
        break;
    }
    return null;
  });
  return dataArr;
}

const ChartDisplay = ({listHome=[],frequency, graphType, dataType=[], categorical,chartHeight, width, margin, marginTop, yAxisTextSize, xAxisTextSize, pointRadius, legendFontSize, displayedLegend, filter }) => {

  const list = getList(listHome, frequency, categorical, dataType);
  const dataArr = getDataArray(list, dataType);
  // console.log("printing in chart display: ");
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
    return <RenderComp dataType={dataType} list={dataArr} filter={filter}/>
  }
}

// ChartDisplay.propTypes= {
//   dataType: PropTypes.array.isRequired,
//   height: PropTypes.string
// };

export default ChartDisplay;
