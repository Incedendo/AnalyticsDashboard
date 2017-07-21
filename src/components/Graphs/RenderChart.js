import React from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

const RenderChart = ({list=[], graphType, dataType=[]} ) => {

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
    }
  });

  const labels = list.map(({label}) => label);

  let dataSet = {
    labels,
    datasets: dataArr.map( (data,index) => ({
        data,
        label: dataType[index],
        borderColor: '#6752ee',
        backgroundColor: randomColor({
          count: labels.length,
          format: 'rgba',
          alpha: 0.3,
          seed: dataType[index]
        }),
      })
    )
  }

  console.log(dataSet);

  const bam = {
    pointRadius: '7',
    pointHoverRadius: '10',
    pointBorderWidth: '2',
    pointBackgroundColor: 'white',
    pointBorderWidth: '3',
    pointHoverBackgroundColor: 'white',
  }

  dataSet.datasets = dataSet.datasets.map(item => ({ ...item, ...bam}))

  let options = {
    responsive: true,
    maintainAspectRatio: true,
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
      }
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
            display: true,
            color: "#4E6685",
        },
        ticks: {
          fontColor: "white", // axis labels
          fontSize: 20
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
            display: true,
            color: "#4E6685",
        },
        ticks: {
          fontColor: "#CCC", // this
          fontSize: 20
        }
      }]
    },
  }
  return (
    <div >
      { graphType === 'bar' && <Bar className='bar' data = {dataSet} options={options} />}
      { graphType === 'line' && <Line data = {dataSet} options={options} />}
      { graphType === 'pie' && <Doughnut data = {dataSet} options={options} />}
    </div>
  );
}

RenderChart.propTypes = {
  dataType: PropTypes.array,
};

export default RenderChart;
