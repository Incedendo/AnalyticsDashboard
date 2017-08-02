import React, { Component } from 'react';
import '../../assets/scss/include.css';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';
import { CardModalDisplay } from '../CardDisplay/CardModalDisplay';
import jsonData from '../../assets/JSON/main.js';

const topMenuOverlay = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : '#022753',
      color                      : 'white',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
    }
};

const errorModal = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'red'
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : 'red',
      color                      : 'white',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
    }
};

const cardTitle = [
                    'Registrations',
                    'Enrollments',
                    'UniqueUserLogin',
                    'ContributionChanges',
                    'BounceRate',
                    'RetirementIncomeCalcUsage',
                    'TopPages',
                    'VisitsbyDeviceType'
                  ];

class CardModal extends Component {

  state = {
    modalIsOpen: true,
    projects: [],
    mounted: false,
    cards: [
      {
        title: 'Registrations',
        graph: false,
        numGraph: true,
        listCard: false,
        graphType: 'compare',
        data: ['Registrations'],
        rightBorder: true,
        bottomBorder: true,
        index: 1
      },
      {
        title: 'Enrollments',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'line',
        data: ['Enrollments', 'Suspicious Enrollments'],
        rightBorder: true,
        bottomBorder: true,
        index: 2
      },
      {
        title: 'Unique User Login',
        graph: false,
        numGraph: true,
        listCard: false,
        graphType: 'compare',
        data: ['Unique User Login'],
        rightBorder: true,
        bottomBorder: true,
        index: 3
      },
      {
        title: 'Contribution Changes',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'line',
        data: ['Contribution Changes'],
        rightBorder: false,
        bottomBorder: true,
        index: 4
      },
      {
        title: 'Bounce Rate',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'list',
        data: ['Top Active Pages'],
        rightBorder: true,
        bottomBorder: false,
        index: 5
      },
      {
        title: 'Retirement Income Calc Usage',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'bar',
        data: ['Retirement Income Calc Usage'],
        rightBorder: true,
        bottomBorder: false,
        index: 6
      },
      {
        title: 'Top Pages',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'list',
        data: ['Top Pages'],
        rightBorder: true,
        bottomBorder: false,
        index: 7
      },
      {
        title: 'Visits by Device Type',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'pie',
        data: ['Visits by Device Type'],
        rightBorder: false,
        bottomBorder: false,
        index: 8
      },
    ]
  }

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

  getKPI = () => {
    if(this.props.match.params.title === 'Registrations')
      return "Registrations"
    if(this.props.match.params.title === 'Enrollments')
      return "Enrollments"
    if(this.props.match.params.title === 'UniqueUserLogin')
      return "Unique User Login"
    if(this.props.match.params.title === 'ContributionChanges')
      return "Contribution Changes"
    if(this.props.match.params.title === 'BounceRate')
      return "Bounce Rate"
    if(this.props.match.params.title === 'RetirementIncomeCalcUsage')
      return "Retirement Income Calc Usage"
    if(this.props.match.params.title === 'TopPages')
      return "Top Pages"
    if(this.props.match.params.title === 'VisitsbyDeviceType')
      return "Visits by Device Type"
  }

  render(){

    const { projects } = this.state
    const paramTitle = this.props.match.params.title;


    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
    }


    if(cardTitle.indexOf(paramTitle) !== -1){
      const card = this.state.cards.find(({ title }) => title === paramTitle)
      console.log(card);
      return(
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            closeModal={this.toggleModal}
            enabledModal={this.state.modalIsOpen}
            contentLabel="Example Modal"
            style={topMenuOverlay}
          >
            <div className="taskbar">
              <NavLink to="/" className="navlink" onClick={this.toggleModal}>Close</NavLink>
            </div>
            <CardModalDisplay
              {...card}
              list={arr}
              dataType={paramTitle}
              graphType={"line"}
              frequency={"quarterly"}
            />
            <CardModalDisplay
              {...card}
              list={arr}
              dataType={paramTitle}
              graphType={"line"}
              frequency={"annually"}
            />
            <CardModalDisplay
              {...card}
              list={arr}
              dataType={paramTitle}
              graphType={"line"}
              frequency={"daily"}
            />
            <CardModalDisplay
              {...card}
              list={arr}
              dataType={paramTitle}
              graphType={"line"}
              frequency={"weekly"}
            />
          </Modal>
        </div>
      )
    }

    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          closeModal={this.toggleModal}
          enabledModal={this.state.modalIsOpen}
          contentLabel="Example Modal"
          style={errorModal}
        >
          <div className="taskbar">
            <NavLink to="/" className="navlink" onClick={this.toggleModal}>Close</NavLink>
          </div>

        </Modal>
      </div>
    );
  }
}

export default CardModal;
