import React from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

const RenderChart = ({ list=[], graphType, dataType=[], height, width, margin, marginTop, yAxisTextSize, xAxisTextSize, pointRadius, legendFontSize, displayedLegend }) => {

  let dataArr= new Array(dataType.length);

  let colorArr = ['rgba(232,68,171,0.5)', 'rgba(255,255,255,0.5)', 'rgba(21,195,218,0.50)', 'rgba(0,156,166,0.50)', 'rgba(224,238,208,0.50)'];

  dataType.map( (stat, index) =>{
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
      case "Suspicious Enrollments":
        dataArr[index] = list.map(({suspiciousEnrollment}) => suspiciousEnrollment);
        break;
    }
  });

  console.log('dataArr is: ');
  console.log(dataArr)

  const labels = list.map(({label}) => label);

  const colors = [];
  for(let i = 0; i < dataArr.length; i++) {
    let num = Math.floor(Math.random()*colorArr.length);
    colors.push(colorArr[num]);
    colorArr.splice(num, 1);
  }

  let dataSet = {
    labels,
    datasets: dataArr.map( (data,index) => ({
        data,
        label: dataType[index],
        backgroundColor: colors[index],
        borderWidth: 0,
      })
    )
  }

  const bam = {
    pointRadius: pointRadius,
    pointHoverRadius: '13',
    pointBorderWidth: '2',
    pointBackgroundColor: '#0C5AB5',
    pointBorderColor: "white",
    pointBorderWidth: '3',
    pointHoverBackgroundColor: '#0C5AB5',
  }

  dataSet.datasets = dataSet.datasets.map(item => ({ ...item, ...bam}))

  console.log("Legend font size "+ legendFontSize);

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      onComplete: function() {
        var ctx = this.chart.ctx;
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
     }
    },
    title: {
      text: dataType[0],
      display: false,
      fontColor: "white",
      fontSize: 22,
    },

    spanGaps: true,
    legend: {
      display: displayedLegend,
      labels: {
          fontColor: "white",
          fontSize: 17,
          horizontalAlign: "left",
          fontFamily: 'Source Sans Pro',
          padding: 15
      },
      position: 'top',
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
            display: true,
            color: "#4E6685",
            drawTicks: true,
            tickMarkLength: 15
        },
        ticks: {
          fontColor: "white", // axis labels
          fontSize: xAxisTextSize,
          padding: 0,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
            display: true,
            color: "#4E6685",
            drawTicks: false
        },
        stacked: true,
        ticks: {
          fontColor: "white", // this
          fontSize: yAxisTextSize,
          padding: 16
        }
      }]
    },
  }

  return (
      <div style={{height: height, width: width, margin: margin, position: "absolute", marginTop: marginTop}}>
        { graphType === 'bar' && <Bar className='bar' data = {dataSet} options={options} />}

        { graphType === 'line' &&
            <Line data = {dataSet} options={options} />
        }

        { graphType === 'pie' && <Doughnut data = {dataSet} options={options} />}
      </div>

  );
}

RenderChart.propTypes = {
  dataType: PropTypes.array,
};

export default RenderChart;
