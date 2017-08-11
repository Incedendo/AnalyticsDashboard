import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import ChartDisplay from './ChartDisplay';
import '../../assets/scss/_ListDisplay.scss';

const pieOptions={
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18
    },
    position: "right"
  },
};
/*
  Method that finds the greatest difference between adjacent indices.
*/
const getMaxPercentage = (listHome, index) => {
  const sliced = listHome[index].slice(0,26);
  let max = 0;
  var i = 0;
  let first = 0;
  let second = 0;
  for(; i < sliced.length - 1; i++){
    let curMax = sliced[i].Percentage.substring(0, sliced[i].Percentage.length-1) - sliced[i+1].Percentage.substring(0, sliced[i+1].Percentage.length-1);
    if (curMax > max){
      max = curMax;
      first = i;
      second = i+1;
    }
  }
  return [max, first, second];
}

const renderList = (listHome, index, dataType) => {
  const sliced = listHome[index].slice(0,26);
  let labels;

  if(index !== 8){
    labels = sliced.slice(0,10).map(({Page}) => Page );
  }
  else {
    labels = sliced.slice(0,10).map(({Device}) => Device );
  }
  const dataArr = sliced.slice(0,10).map(({Percentage}) => parseFloat(Percentage.substring(0, Percentage.length-1)));

  const colorArr = ['rgba(232,68,171,0.5)', 'rgba(255,255,255,0.5)', 'rgba(21,195,218,0.50)', 'rgba(0,156,166,0.50)', 'rgba(224,238,208,0.50)'];

  const initialChartConfig = {
    labels: labels,
    datasets: [{
      data: dataArr,
      backgroundColor: colorArr,
      borderColor: ['#12335E ','#12335E ','#12335E ','#12335E '],
    }]
  };



  const [max, start, end ] = getMaxPercentage(listHome, index);
  // console.log("start: " + start);

  const renderListHeader = (index) =>{
    const label = index === 8 ? "Device" : "Page Rank";
    return(
      <div className="page pageHeader">
        <span>{label}</span>
        <span className="detailedSecondSpan">Views</span>
        <span className="detailedLastSpan">%</span>
      </div>
    )
  }

  const renderListItems = (sliced, index) =>{
    // item only exists in the map function so can't extract it out in to and objects
    //const label = index === 8 ? "item.Device" : "item.Page";
    if(index === 8){
      return(
        sliced.map((item, index) =>{
          return(
            <div key={index} className="page">
              <span>{item.Device}</span>
              <span className="detailedSecondSpan">{item.PageViews}</span>
              <span className="detailedLastSpan">{item.Percentage}</span>
            </div>
          )
        })
      )
    }else{
      return(
        sliced.map((item, index) =>{
          return(
            <div key={index} className="page">
              <span>{item.Page}</span>
              <span className="detailedSecondSpan">{item.PageViews}</span>
              <span className="detailedLastSpan">{item.Percentage}</span>
            </div>
          )
        })
      )
    }
  }

  const renderPageHeader = (index,sliced, start, end) => {
    if(index !== 8)
      return <h2 className="centerText">Greatest Cut Off Percentage: {max}% From {sliced[start].Page} To {sliced[end].Page} </h2>
    else
      return <h2 className="centerText">Greatest Cut Off Percentage: {max}% From {sliced[start].item} To {sliced[end].item} </h2>
  }

  return(
    <div className="row">
      {renderPageHeader(index,sliced, start, end)}
      <div className="detailedEnclose col-md-6">
        {renderListHeader(index)}
        {renderListItems(sliced, index)}
      </div>

      <div className="col-md-6 pieList">
        <div className="PiePaddingTop">
          <ChartDisplay listHome={listHome} dataType={dataType} graphType='Pie' categorical />
        </div>
      </div>
    </div>
  );
}

const DetailedListDisplay = ({listHome=[], dataType = []}) => {
  let index;
  switch(dataType[0]) {
    case 'Bounce Rate':
      index = 4;
      break;
    case 'Top Pages':
      index = 5;
      break;
    case "Visits by Device Type":
      index = 8;
      break;
    default:
      index = 4;
  }
  return renderList(listHome, index, dataType);
}

DetailedListDisplay.propTypes = {
  list: PropTypes.array,
};

export default DetailedListDisplay;
