import React from 'react'
import {Bar, Line, Doughnut} from 'react-chartjs-2';
import PropTypes from 'prop-types';


/*
  These are the specific configurations for a Pie Chart
*/
const pieOptions={
  legend: {
    labels: {
        fontColor: "white",
        fontSize: 18,
    },
    position: "right",
  },
};

/*
  Given an array of colors, it will randomize them into an array with a size of however many data types are within it.
*/

const getColors = () => {

  let colorArr = ['rgba(232,68,171,0.5)', 'rgba(255,255,255,0.5)', 'rgba(21,195,218,0.50)', 'rgba(0,156,166,0.50)', 'rgba(224,238,208,0.50)'];

  const colors = [];
  for(let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random()*colorArr.length);
    colors.push(colorArr[num]);
    colorArr.splice(num, 1);
  }
  return colors;
}

const getGraphOptions = (dataType,displayedLegend,xAxisTextSize,yAxisTextSize, labels) => (
    {
      responsive: true,
      maintainAspectRatio: false,
      // animation: {
      //   onComplete: function() {
      //     var ctx = this.chart.ctx;
      //     ctx.textAlign = "center";
      //     ctx.textBaseline = "bottom";
      //  }
      // },
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
)

/*
  Determines the options and layout of the graphs to be presented, and renders it.
*/

const RenderChart = ({ list=[], dataArr=[], categorical, graphType, dataType=[], height, width, margin, marginTop, yAxisTextSize, xAxisTextSize, pointRadius, legendFontSize, displayedLegend }) => {

  const colors = getColors();

  let labels = [];
  let initialChartConfig = {};

  //If the data is categorical, set specific options for the pie chart
  if(categorical) {
    switch(dataType[0]){
      case "Visits by Device Type":
        labels = list.map(({Device}) => Device);
        break;
      default:
        labels = list.slice(0,26).slice(0,10).map(({Page}) => Page );
        break;
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

  //The style of the points
  const pointOptions = {
    pointRadius: pointRadius,
    pointHoverRadius: '13',
    pointBorderWidth: '2',
    pointBackgroundColor: '#0C5AB5',
    pointBorderColor: "white",
    pointHoverBackgroundColor: '#0C5AB5',
  }

  dataSet.datasets = dataSet.datasets.map(item => ({ ...item, ...pointOptions}))

  const options = getGraphOptions(dataType,displayedLegend,xAxisTextSize,yAxisTextSize, labels);

  return (
      <div style={{height: height, width: width, margin: margin, position: "absolute", marginTop: marginTop}}>
        { graphType === 'Bar' && <Bar className='bar' data={dataSet} options={options} />}

        { graphType === 'Line' &&
            <Line data = {dataSet} options={options} />
        }
        { graphType === 'Pie' &&
          <Doughnut data={initialChartConfig} options={pieOptions} />}
      </div>

  );
}

RenderChart.propTypes = {
  dataType: PropTypes.array,
};

export default RenderChart;
