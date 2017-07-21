import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './example.css';

class TopChart extends Component{

  state = {
    KPI: 'PAGE VISITS'
  }

  render() {
    return (
      <div style={{width: "2000px", height: "", position:"absolute", left:this.props.left}}>

          <Line
            data={this.props.data}
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
                text: this.state.KPI,
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
              },
            }}
          />
      </div>
    )
  }
}

export default TopChart;
