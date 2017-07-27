import React, { Component } from 'react';
import axios from 'axios';
import {CardMenu} from './CardDisplay/CardMenu';
import ChartDisplay from './Graphs/ChartDisplay';
import Header from './Header/Header';
import FreqFilter from './utils/FreqFilter';
import PropTypes from 'prop-types';
import jsonData from '../assets/JSON/main.js';
import '../assets/scss/_home.scss';

class Home extends Component {
  state = {
    projects: [],
    mounted: false,
    filter: '',
    frequency: '',
    overlay: false,
  };

  componentDidMount() {
    this.setState({
      projects: jsonData,
      mounted: true,
      filter: 'QTD',
      frequency: 'quarterly'
    });
  }

  handleFilter = (id) => {

    this.setState({
      filter: id
    })
    switch(id) {
      case 'QTD':
        this.setState({
          frequency: 'quarterly'
        })
        break;
      case 'MTD': this.setState({
        frequency: 'annually'
      })
        break;
      case 'YTD': this.setState({
        frequency: 'daily'
      })
        break;
      case 'WTD': this.setState({
        frequency: 'weekly'
      })
        break;
    }
  }

  render() {
    const { projects } = this.state
    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
      console.log("Component mounted");
    }

    console.log(arr);

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];

    return (
      <div className="mainDiv">
          <div className='strip' />
        <div className='headerDiv'>
            <Header />
          </div>

          <div className="subMainDiv">
            <div className="pageVisit inLine">
              {dataType[0]}
            </div>

            <div className='filterHeader inLine'>
              <FreqFilter handleFilter={this.handleFilter}/>
            </div>

            {this.state.mounted &&
              <ChartDisplay listHome={arr} graphType='line' dataType={dataType} frequency={this.state.frequency} chartHeight="300px" width="97%"
              margin="45px" yAxisTextSize="20" xAxisTextSize="25"
              pointRadius="10"
              />}
          </div>

          <div className="container noMargin">
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

// componentDidMount() {
//  const dataAPI = 'http://localhost:3000';
//  axios.get(dataAPI + '/test')
//    .then((response) => {
//      this.setState({
//       //projects: response.data,
//       projects: jsonData,
//       mounted: true,
//       filter: 'QTD',
//       frequency: 'quarterly'
//      });
//    })
//    .catch( (error) => {
//      console.log(error);
//    }
//  );
//
// }
