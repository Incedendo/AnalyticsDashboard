import React, { Component } from 'react';
import axios from 'axios';

import {CardMenu} from './CardDisplay/CardMenu';
import ChartDisplay from './Graphs/ChartDisplay';

import TopChart from './TopChart';
import PropTypes from 'prop-types';
import './home.css';

class Home extends Component {
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

  render() {
    const { projects } = this.state

    let arr=[];

    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
      console.log('Component mounted');
    }

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];
    console.log(arr);

    return (
      <div>
        <div>
          Overview
        </div>
        <div className="mainDiv">
          {this.state.mounted && <ChartDisplay listHome={arr} graphType='line' dataType={dataType} frequency="annually" chartHeight="500px" width="" />}
        </div>

        <div>
          <CardMenu list={arr} />
        </div>

      </div>
    );

  }
}

Home.propTypes = {
  dataType: PropTypes.array,
};

export default Home;
//


// <CardMenu list={arr} />
