import React, { Component } from 'react';
import axios from 'axios';
import {CardMenu} from './CardDisplay/CardMenu';
import ChartDisplay from './Graphs/ChartDisplay';
import Header from './Header/Header';
import PropTypes from 'prop-types';
import './home.css';
import jsonData from '../assets/JSON/main.js';

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
        //projects: response.data,
        projects: jsonData,
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
    }

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];

    return (

      <div className="mainDiv">

          <Header />
          <div className="mainDiv">
            <div className="pageVisit">
              Page Visits
            </div>
            {this.state.mounted && <ChartDisplay
              // listHome={arr}
              listHome={arr}
              graphType='line'
              dataType={dataType}
              frequency="annually"
              chartHeight="500px"
              width="100%" />}
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
