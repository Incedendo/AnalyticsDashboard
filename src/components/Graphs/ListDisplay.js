import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';
import '../../assets/scss/_ListDisplay.scss';

const colorArr = ['rgba(232,68,171,0.6)', 'rgba(21,195,218,0.6)', 'rgba(0,156,166,0.6)','rgba(228, 92, 234, 0.6)'];

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

const renderList = (listHome, index) => {
  const list = listHome[index];
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
              <span className="secondSpan">{item.PageViews}</span>
              <span className="lastSpan">{item.Percentage}</span>
            </div>
          )
      })}
    </div>
  );
}

const renderDeviceType = (listHome, index) => {
  const list = listHome[index];
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

const options={
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18
    }
  },
};

const ListDisplay = ({listHome=[], cardIndex}) => {
  // the 5th card is TOP ACTIVE PAGES
  if(cardIndex === 5) return renderList(listHome, 4)
  if(cardIndex === 7) return renderList(listHome, 5)
  if(cardIndex === 8) return renderDeviceType(listHome,6)
}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
