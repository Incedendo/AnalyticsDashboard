import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import '../../assets/scss/_ListDisplay.scss';

  let colorArr = ['rgba(232,68,171,0.6)', 'rgba(21,195,218,0.6)', 'rgba(0,156,166,0.6)','rgba(228, 92, 234, 0.6)'];

  const colors = [];
  for(let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random()*colorArr.length);
    colors.push(colorArr[num]);
    colorArr.splice(num, 1);
  }

let initialChartConfig = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: colors,
    borderColor: ['#12335E ','#12335E ','#12335E ','#12335E '],

  }]
};

const ListDisplay = ({listHome=[], cardIndex}) => {

  const options={
    legend: {
      labels: {
          fontColor: "white",
          fontSize: 18
      }
    },
  };

  // the 5th card is TOP ACTIVE PAGES
  if(cardIndex == 5){
    const list = listHome[4];
    return(
      <div className="enclose">
        <div className="page pageHeader">
          <span>Page Rank</span>
          <span className="secondSpan">Views</span>
          <span className="lastSpan">%</span>
        </div>
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span className="secondSpan">{item.Entries}</span>
                <span className="lastSpan">{item.Percentage}</span>
              </div>
            )
        })}
      </div>
    );
  }else if(cardIndex == 7){
    // The 7th card is the TOP PAGES
    const list = listHome[5];
    return (
      <div className="enclose">
        <div className="page pageHeader">
          <span>Page Rank</span>
          <span className="secondSpan">Views</span>
          <span className="lastSpan">%</span>
        </div>
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span className="secondSpan">{item.PageViews}</span>
                <span className="lastSpan">{item.Percentage}</span>
              </div>
            )
        })}
      </div>
    );
  }else if(cardIndex == 8){
    const list = listHome[6];
    const labels = list.map(({Device}) => Device);
    const percentage = list.map(({percentage}) => percentage);
    console.log(percentage);
    initialChartConfig.labels = labels;
    initialChartConfig.datasets[0].data = percentage;
    return (
      <div style={{}}>
          <Doughnut data = {initialChartConfig} options={options} />
      </div>
    );
  }
}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
