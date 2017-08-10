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
      filter: 'MTD',
      frequency: 'monthly'
    });
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
    });
  }

  handleFrequency = (id) => {
    this.setState({
      frequency: id
    })
  }

  handleFilter = (id) => {
    let newState = {filter: id, frequency: ''}
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

      {this.state.mounted &&
        <ChartDisplay listHome={arr} graphType='Line' dataType={dataType} frequency={this.state.frequency} chartHeight="300px" width="97%"
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
          <Header />
          {this.renderSubMainDiv(dataType, arr)}
          <div className='hrDiv'>
            <hr className="divider"/>
          </div>
          <DisplayCards num={8} list={arr}/>
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
//
// It appears that this.state.mounted only exists to protect projects. If that's
// true, just check if projects has a length instead of using mounted.
//
// On line 71, better to new line all of the jsx properties of <ChartDisplay />
//
// Line 31, toggleModal() could be written as toggleModal = () =>
// this.setState({ modalIsOpen: !this.state.modalIsOpen });
//
// line 39 handleFrequency() could be written as a one liner
//
// line 46 newState could be declared with const not a let
//
// line 59/60 should have new line/space between the methods
//
// line 84 if this.state.variableName is used more than once, it's probably
// better to either destructure variableName from state or assign it to a
// variable for reuse
//
// line 102 could be written as const arr = projects.length > 0 ?
// Object.keys(projects).map(key => projects[key]) : [];
//
// line 107 dataType should be declared at top of file outside of compoonent so
// that it isn't instantiated on every rerender.
