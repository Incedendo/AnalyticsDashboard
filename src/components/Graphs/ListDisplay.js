import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import '../../assets/scss/_ListDisplay.scss';

let initialChartConfig = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      '#36A2EB',
      '#FFCE56',
      'pink',
      'red'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      'green',
    ]
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
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span>{item.Entries}</span>
                <span>{item.Percentage}</span>
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
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span>{item.PageViews}</span>
                <span>{item.Percentage}</span>
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
