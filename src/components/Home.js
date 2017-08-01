import React, { Component } from 'react';
import {CardMenu} from './CardDisplay/CardMenu';
import ChartDisplay from './Graphs/ChartDisplay';
import Header from './Header/Header';
import FreqFilter from './utils/FreqFilter';
import PropTypes from 'prop-types';
import jsonData from '../assets/JSON/main.js';
import '../assets/scss/_home.scss';
import '../assets/scss/include.css';
import ModalMenu from './Header/ModalMenu';

class Home extends Component {
  state = {
    projects: [],
    mounted: false,
    filter: '',
    frequency: '',
    overlay: false,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.setState({
      projects: jsonData,
      mounted: true,
      filter: 'QTD',
      frequency: 'quarterly'
    });
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
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
  renderSubMainDiv = (dataType, arr) => (
    <div className="subMainDiv">
      <div className="pageVisit inLine">
        Page Visits
      </div>

      <div className='filterHeader inLine'>
        <FreqFilter handleFilter={this.handleFilter}/>
      </div>

      {this.state.mounted &&
        <ChartDisplay listHome={arr} graphType='line' dataType={dataType} frequency={this.state.frequency} chartHeight="300px" width="97%"
        margin="45px" yAxisTextSize="15" xAxisTextSize="20"
        pointRadius="8"
        legendFontSize="10"
        displayedLegend="true"
        marginTop="0px"
        />}
    </div>
  )

  renderMainDiv = (dataType, arr) => (
    <div>
      <ModalMenu
        modalIsOpen={this.state.modalIsOpen}
        toggleModal={this.toggleModal}
        enabledModal={this.state.modalIsOpen}
      />
      <div className="mainDiv">
        <div className='strip' />
          <div className='headerDiv'>
            <Header />
          </div>

          {this.renderSubMainDiv(dataType, arr)}
          <div className='hrDiv'>
            <hr className="divider"/>
          </div>
          <div className="container noMargin bottomCardDiv">

            <CardMenu list={arr} />
          </div>
      </div>
    </div>
  )

  render() {
    const { projects } = this.state
    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
    }

    const dataType = ["Registrations", "Enrollments", "Unique User Login"];
    return (
      this.renderMainDiv(dataType, arr)
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
//       (error);
//    }
//  );
//
// }
