import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import '../../assets/scss/_ListDisplay.scss';

const pieOptions={
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18
    }
  },
};

const getMaxPercentage = (listHome, index) => {
  const list = listHome[index];
  const sliced = list.slice(0,26);
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

const renderList = (listHome, index) => {
  const list = listHome[index];
  const sliced = list.slice(0,26);
  let max, start, end;

  const labels = sliced.slice(0,5).map(({Page}) => Page );
  const dataArr = sliced.slice(0,5).map(({Percentage}) => parseFloat(Percentage.substring(0, Percentage.length-1)));
  console.log(dataArr.length === labels.length);
  const colorArr = ['rgba(232,68,171,0.5)', 'rgba(255,255,255,0.5)', 'rgba(21,195,218,0.50)', 'rgba(0,156,166,0.50)', 'rgba(224,238,208,0.50)'];

  const initialChartConfig = {
    labels: labels,
    datasets: [{
      data: dataArr,
      backgroundColor: colorArr,
      borderColor: ['#12335E ','#12335E ','#12335E ','#12335E '],
    }]
  };

  [max, start, end ] = getMaxPercentage(listHome, index);
  // console.log("start: " + start);
  return(
    <div className="row">
      <h1>Greatest Cut Off Percentage: {max}% From {sliced[start].Page} To {sliced[end].Page} </h1>
      <div className="detailedEnclose col-md-6">

        <div className="page pageHeader">
          <span>Page Rank</span>
          <span className="detailedSecondSpan">Views</span>
          <span className="detailedLastSpan">%</span>
        </div>
        {sliced.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span className="detailedSecondSpan">{item.PageViews}</span>
                <span className="detailedLastSpan">{item.Percentage}</span>
              </div>
            )
        })}
      </div>

      <div className="col-md-6">
        <div style={{paddingTop: "280px"}}>
          <Doughnut data = {initialChartConfig} options={pieOptions} />}
        </div>
      </div>
    </div>

  );
}

const ListDisplay = ({listHome=[], dataType = []}) => {
  // the 5th card is TOP ACTIVE PAGES
  let data = dataType[0]
  switch(data) {
    case 'Bounce Rate':
      return renderList(listHome, 4);
    case 'Top Pages':
      return renderList(listHome, 5);
  }
}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
