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
    filter: 'MTD',
    frequency: 'monthly',
    overlay: false,
    modalIsOpen: false,
  };


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
    const arr = Object.keys(jsonData).map((key) => jsonData[key]) ;
    dataType = ["Registrations", "Enrollments", "Unique User Login"];
    return this.renderMainDiv(dataType, arr);
  }
}

Home.propTypes = {
  dataType: PropTypes.array,
};

export default Home;

// line 39 handleFrequency() could be written as a one liner
//
// line 107 dataType should be declared at top of file outside of component so
// that it isn't instantiated on every rerender. let's go over this again, it
// could simply be used in the one spot it's used rather than passed
