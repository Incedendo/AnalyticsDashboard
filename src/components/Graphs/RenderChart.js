import React from 'react'
import {Bar, Line, Doughnut} from 'react-chartjs-2';
import PropTypes from 'prop-types';

const pieOptions={
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18
    }
  },
};

const RenderChart = ({ list=[], dataArr=[], categorical, graphType, dataType=[], height, width, margin, marginTop, yAxisTextSize, xAxisTextSize, pointRadius, legendFontSize, displayedLegend }) => {

  let colorArr = ['rgba(232,68,171,0.5)', 'rgba(255,255,255,0.5)', 'rgba(21,195,218,0.50)', 'rgba(0,156,166,0.50)', 'rgba(224,238,208,0.50)'];


  // console.log("print list: ");
  // console.log(list);

  dataType.map( (stat, index) => {
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
      case "Total Visits":
        dataArr[index] = list.map(({totalVisits}) => totalVisits);
        break;
      case "Unique Visits":
        dataArr[index] = list.map(({uniqueVisits}) => uniqueVisits);
        break;
      case "Page Views":
        dataArr[index] = list.map(({PageViews}) => PageViews);
        break;
    }
    return null;
  });


  let labels = list.map(({label}) => label);

  const colors = [];
  for(let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random()*colorArr.length);
    colors.push(colorArr[num]);
    colorArr.splice(num, 1);
  }

  // let labels = [];
  let initialChartConfig = {};
  let pieOptions = {};
  if(categorical) {
    switch(dataType[0]){
      case "Visits by Device Type":
        labels = list.map(({Device}) => Device)
    }
    initialChartConfig = {
      labels: labels,
      datasets: [{
        data: dataArr[0],
        backgroundColor: colors,
        borderColor: ['#12335E ','#12335E ','#12335E ','#12335E '],
      }]
    };
  }else{
    labels = list.map(({label}) => label);
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
    pointHoverBackgroundColor: '#0C5AB5',
  }


  dataSet.datasets = dataSet.datasets.map(item => ({ ...item, ...bam}))


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
          padding: 16,
          callback:
           function(label, index, labels) {
        return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
        }
      }]
    },
  }

  return (
      <div style={{height: height, width: width, margin: margin, position: "absolute", marginTop: marginTop}}>
        { graphType === 'Bar' && <Bar className='bar' data = {dataSet} options={options} />}

        { graphType === 'Line' &&
            <Line data = {dataSet} options={options} />
        }
        { graphType === 'Pie' &&
          <Doughnut data = {initialChartConfig} options={pieOptions} />}
      </div>

  );
}

RenderChart.propTypes = {
  dataType: PropTypes.array,
};

export default RenderChart;
