import React from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

const RenderChart = ({ list=[], graphType, dataType=[], height, width, margin, yAxisTextSize, xAxisTextSize, pointRadius }) => {

  let dataArr= new Array(dataType.length);

  dataType.map( (stat, index) =>{
    switch(stat){
      case "Registrations":
        dataArr[index] = list.map(({totalVisits}) => totalVisits);
        break;
      case "Enrollments":
        dataArr[index] = list.map(({uniqueVisits}) => uniqueVisits);
        break;
      case "Unique User Login":
        dataArr[index] = list.map(({returnVisits}) => returnVisits);
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
        dataArr[index] = list.map(({returnVisits}) => returnVisits);
        break;
    }
  });

  console.log('dataArr is: ');
  console.log(dataArr)

  const labels = list.map(({label}) => label);

  const fillColors = [ "rgba(183, 117, 127, 0.6)", "rgba(41, 195, 216, 0.8)", "rgba(166, 178, 194, 1)"];


  let dataSet = {
    labels,
    datasets: dataArr.map( (data,index) => ({
        data,
        label: dataType[index],
        borderColor: '#6752ee',
        backgroundColor: randomColor({

          format: 'hsla',
          alpha: 0.5,

        }),
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

  console.log("y-axis text size: "+ yAxisTextSize);

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    pointStyle: 'dash',
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
      labels: {
          fontColor: "white",
          fontSize: 18,
          horizontalAlign: "left"
      },
      position: 'top',

    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
            display: true,
            color: "#4E6685",
            drawTicks: false
        },
        ticks: {
          fontColor: "white", // axis labels
          fontSize: xAxisTextSize,
          padding: 20
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
      <div style={{height: height, width: width, margin: margin}}>
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
