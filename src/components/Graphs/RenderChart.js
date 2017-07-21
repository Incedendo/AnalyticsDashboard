import React from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';
import randomColor from 'randomcolor';

export const RenderChart = ({list=[], graphType, dataType}) => {

  var data=[];

  switch(dataType){
    case "Registrations":
      data = list.map(({totalVisits}) => totalVisits);
      break;
    case "Enrollments":
      data = list.map(({uniqueVisits}) => uniqueVisits);
      break;
    case "Unique User Login":
      data = list.map(({returnVisits}) => returnVisits);
      break;
    case "Contribution Changes":
      data = list.map(({signUps}) => signUps);
      break;
    case "Top Active Pages":
      data = list.map(({signIns}) => signIns);
      break;
    case "Retirement Income Calc Usage":
      data = list.map(({contributionChange}) => contributionChange);
      break;
    case "Top Pages":
      data = list.map(({allocationChange}) => allocationChange);
      break;
  }



  const labels = list.map(({label}) => label);

  let dataSet = {
    labels,
    datasets: [{
      data,
      label: dataType,
      borderColor: '#6752ee',
      backgroundColor: randomColor({
        count: labels.length,
        format: 'rgba',
        alpha: 0.3,
        seed: dataType
      }),
    }],
  }

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
    title: {
      text: dataType,
      display: true
    },
    hover: {
      mode: 'index'
    },
    animation: {
        duration: '1500',
        easing: 'easeOutQuint'
    },
    gridLines: {
      color: 'rgb(74,99,132, 1.0)',
    },
    scales: {
      display:true,
    },
    responsive: true,
    maintainAspectRatio: true,

  }

  return (
    <div>
      { graphType === 'bar' && <Bar className='bar' data = {dataSet} options={options} />}
      { graphType === 'line' && <Line data = {dataSet} options={options} />}
      { graphType === 'pie' && <Doughnut data = {dataSet} options={options} />}
    </div>
  )
}
