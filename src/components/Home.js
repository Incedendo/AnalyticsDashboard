import React, { Component } from 'react';
import DisplayCards from './CardDisplay/DisplayCards';
import ChartDisplay from './Graphs/ChartDisplay';
import Header from './Header/Header';
import FreqFilter from './utils/FreqFilter';
import PropTypes from 'prop-types';
import jsonData from '../assets/JSON/main.js';
import '../assets/scss/_home.scss';
import '../assets/scss/include.css';
import ModalMenu from './Header/ModalMenu';

let dataType = [];

class Home extends Component {
  state = {
    projects: [],
    filter: '',
    frequency: '',
    overlay: false,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.setState({
      projects: jsonData,
      filter: 'MTD',
      frequency: 'monthly'
    });
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  handleFrequency = (id) => {
    this.setState({ frequency: id })
  }

  handleFilter = (id) => {
    const newState = {filter: id, frequency: ''}
    switch(id) {
      case 'QTD':
        newState.frequency = 'quarterly'
        break;
      case 'MTD':
        newState.frequency = 'monthly'
        break;
      case 'YTD':
        newState.frequency = 'annually'
        break;
    }
    this.setState(newState);
  }

  renderSubMainDiv = (dataType, arr) => (
    <div className="subMainDiv">
      <div className="pageVisit inLine">
        Page Visits
      </div>

      <div className='filterHeader inLine'>
        <FreqFilter handleFilter={this.handleFilter}/>
      </div>

      {Object.keys(this.state.projects).length &&
        <ChartDisplay
          listHome={arr}
          graphType='Line'
          dataType={dataType}
          frequency={this.state.frequency}
          chartHeight="300px"
          width="97%"
          margin="45px"
          yAxisTextSize="15"
          xAxisTextSize="20"
          pointRadius="8"
          legendFontSize="10"
          displayedLegend="true"
          marginTop="0px"
        />}
    </div>
  )

  renderMainDiv = (dataType, arr) => {

    const { modalIsOpen } = this.state;
    return (<div>
        <ModalMenu
          modalIsOpen={modalIsOpen}
          toggleModal={this.toggleModal}
          enabledModal={modalIsOpen}
        />
        <div className="mainDiv">
          <div className='strip' />
          <Header />
          {this.renderSubMainDiv(dataType, arr)}
          <div className='hrDiv'>
            <hr className="divider"/>
          </div>
          <DisplayCards list={arr}/>
        </div>
      </div>)
  }

  render() {
    const { projects } = this.state
    let arr=[];
    arr = Object.keys(projects).length ? Object.keys(projects).map((key) => projects[key]) : [];

    dataType = ["Registrations", "Enrollments", "Unique User Login"];
    return this.renderMainDiv(dataType, arr);
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
