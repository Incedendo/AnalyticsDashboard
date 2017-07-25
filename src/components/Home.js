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
    frequency: ''
  };

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       this.setState({
        //projects: response.data,
        projects: jsonData,
        mounted: true,
         mounted: true,
         filter: 'QTD',
         frequency: 'quarterly'
       });
     })
     .catch( (error) => {
       console.log(error);
     }
   );

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
    }

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];

    return (

      <div className="mainDiv">
          <div className='strip' style={{background:'#29C3D8',height:'10px'}}/>
          <Header />
          <div className="mainDiv">

            <div className="pageVisit inline">
              Page Visits
            </div>

            <div className='filterHeader inline'>
              <FreqFilter handleFilter={this.handleFilter}/>
            </div>

          {this.state.mounted && <ChartDisplay listHome={arr} graphType='line' dataType={dataType} frequency={this.state.frequency} chartHeight="440px" width="100%" />}
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
//


// <CardMenu list={arr} />
