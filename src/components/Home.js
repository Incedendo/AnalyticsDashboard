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

const dataType = ["Registrations", "Enrollments", "Unique User Login"];

class Home extends Component {
  state = {
    filter: 'MTD',
    frequency: 'monthly',
    overlay: false,
    modalIsOpen: false,
  };


  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  handleFrequency = (id) => (this.setState({ frequency: id }))

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

  renderSubMainDiv = (arr) => (
    <div className="subMainDiv">
      <div className="pageVisit inLine">
        Page Visits
      </div>

      <div className='filterHeader inLine'>
        <FreqFilter handleFilter={this.handleFilter}/>
      </div>
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
        />
    </div>
  )

  renderMainDiv = (arr) => {

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
          {this.renderSubMainDiv(arr)}
          <div className='hrDiv'>
            <hr className="divider"/>
          </div>
          <DisplayCards list={arr}/>
        </div>
      </div>)
  }

  render() {
    const arr = Object.keys(jsonData).map((key) => jsonData[key]) ;

    return this.renderMainDiv(arr);
  }
}

Home.propTypes = {
  dataType: PropTypes.array,
};

export default Home;
