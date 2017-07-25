import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './example.css';

const TopChart = ({ mounted, data }) => {

  const getTopChartData = (arr) => {
    if(mounted){
      const processedData = {
        datasets: [{
          label: 'Unique Visits',
          borderColor: '#6752ee',
          backgroundColor: 'rgba(41,195,216, 0.5)',
          pointRadius: '7',
          pointHoverRadius: '10',
          pointBackgroundColor: 'white',
          pointBorderWidth: '2',
          pointHoverBorderWidth: '3',
        },
        {
          label: 'Total Visits',
          backgroundColor: 'rgba(	0, 182, 254,0.2)',
          borderColor: '#00a4e4',
          pointRadius: '7',
          pointHoverRadius: '10',
          pointBackgroundColor: 'white',
          pointBorderWidth: '2',
          pointHoverBorderWidth: '3',
        }],
        label: 'Numbers'
      };

      processedData.labels 	= arr[0].map(({label})=> label);
      processedData.datasets[0].data = arr[0].map(({totalVisits})=> totalVisits);
      processedData.datasets[1].data = arr[0].map(({uniqueVisits})=> uniqueVisits);

      return processedData;
    }

    return null;

  }

  if(getTopChartData(data)){
      return (
        <div style={{width: "2000px", height: "", position:"absolute", left:""}}>

          <Line
            data={getTopChartData(data)}
            options={{
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
                text: this.props.KPI,
                display: true,
                fontColor: "white",
                fontSize: 22,
              },
              spanGaps: true,
              legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18
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
              },}}
            />
          </div>
        )
      }else{
        return(
          <div>
            Loading...
          </div>
        );
      }

}

export default TopChart;
