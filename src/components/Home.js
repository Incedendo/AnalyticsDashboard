import React, { Component } from 'react';
import axios from 'axios';

import {CardMenu} from './CardDisplay/CardMenu';

import TopChart from './TopChart';
import './home.css';


export default class Home extends Component {
  state = {
    projects: [],
    mounted: false
  };

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       this.setState({
         projects: response.data,
         mounted: true
       });
     })
     .catch( (error) => {
       console.log(error);
     }
   );
  }

  getTopChartData(arr){
    if(this.state.mounted){
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

  render() {
    const { projects } = this.state;
    var arr =[]; //Array of arrays

    Object.keys(projects)
      .map((key) => {
        const list = projects[key];
        arr.push(list);
    });

    return (
      <div >
        <CardMenu list={arr} />
      <div className="mainDiv">
        {this.getTopChartData(arr) && <TopChart data={this.getTopChartData(arr)} /> }
      </div>
    );
  }
}
