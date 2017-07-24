import React, { Component } from 'react';
import axios from 'axios';

import {CardMenu} from './CardDisplay/CardMenu';
import ChartDisplay from './Graphs/ChartDisplay';
import Header from './Header/Header'
import FreqFilter from './utils/FreqFilter';

import PropTypes from 'prop-types';
import './home.css';

class Home extends Component {
  state = {
    projects: [],
    mounted: false,
    frequency: '',
    filter: '',
  };

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
    }
  }

  componentDidMount() {
   const dataAPI = 'http://localhost:3000';
   axios.get(dataAPI + '/test')
     .then((response) => {
       this.setState({
         projects: response.data,
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

  render() {
    const { projects } = this.state

    let arr=[];

    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
    }

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];

    return (

      <div style={{backgroundColor: '#022753'}}>
        <Header />

        <div className="mainDiv">
          <div>
            <div className="pageVisit inLine">
              Page Visits
            </div>
            <div className='inLine filterHeader'>
              <FreqFilter handleFilter={this.handleFilter}/>
            </div>
          </div>
          {this.state.mounted && <ChartDisplay listHome={arr} graphType='line' dataType={dataType} frequency="annually" chartHeight="500px" width="110%" />}
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
