import React, { Component } from 'react';
import '../../assets/scss/include.css';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';
import { CardModalDisplay } from './CardModalDisplay';
import jsonData from '../../assets/JSON/main.js';
import cards from '../../assets/JSON/cards.js';

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

const CardFrequencies = [
  {
    frequency: "annually",
    rightBorder: true,
    bottomBorder: true
  },
  {
    frequency: "quarterly",
    rightBorder: false,
    bottomBorder: true
  },
  {
    frequency: "weekly",
    rightBorder: true,
    bottomBorder: false
  },
  {
    frequency: "daily",
    rightBorder: false,
    bottomBorder: false
  }
];

const cardTitle = [
                    'Total Visits',
                    'Unique Visits',
                    'Sign Ups',
                    'Sign Ins',
                    'Unique User Login',
                    'Registrations',
                    'Enrollments',
                    'Suspicious Enrollments',
                    'Contribution Changes',
                    'Bounce Rate',
                    'Retirement Income Calc Usage',
                    'Top Pages',
                    'Visits by Device Type'
                  ];

const cardsINFO = cards;

class CardModal extends Component {

  state = {
    modalIsOpen: true,
    projects: [],
    mounted: false,
    cards:
      {
        title: '',
        graph: false,
        numGraph: false,
        listCard: false,
        graphType: '',
        frequency: "",
        data: [''],
      }

  }

  componentDidMount() {
    this.setState({
      projects: jsonData,
      mounted: true,
      cards: {
        title: this.props.location.state.dataType[0],
        graph: this.props.location.state.graph,
        comp: this.props.location.state.comp,
        listCard: this.props.location.state.list,
        graphType: this.props.location.state.graphType,
        //frequency: this.props.location.state.frequency,
        //filter: this.props.location.state.filter,
      }
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
    if(this.props.match.params.title === 'TotalVisits')
      return 'Total Visits'
    if(this.props.match.params.title === 'UniqueVisits')
      return 'Unique Visits'
    if(this.props.match.params.title === 'SignUps')
      return "Sign Ups"
    if(this.props.match.params.title === 'SignIns')
      return "Sign Ins"
    if(this.props.match.params.title === 'UniqueUserLogin')
      return "Unique User Login"
    if(this.props.match.params.title === 'Registrations')
      return "Registrations"
    if(this.props.match.params.title === 'Enrollments')
      return "Enrollments"
    if(this.props.match.params.title === 'SuspiciousEnrollments')
      return 'Suspicious Enrollments'
    if(this.props.match.params.title === 'ContributionChange')
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
    const paramTitle = this.getKPI();
    const dataType = [];
    dataType.push(paramTitle);

    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
    }

    if(cardTitle.indexOf(paramTitle) !== -1 && this.state.mounted){
      const card = this.state.cards;
      //console.log("Display LIST: " + this.state.cards.listCard);
      console.log("printing card: " + card.listCard);
      const className="";
      if(!card.listCard){
        return(
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              closeModal={this.toggleModal}
              enabledModal={this.state.modalIsOpen}
              contentLabel="Example Modal"
              style={topMenuOverlay}
            >
              <div className="detailTaskbar">
                <div className="DetailTaskbarViewTitle">
                  {paramTitle}
                </div>
                <NavLink to="/" className="detailNavLink" onClick={this.toggleModal}>Close</NavLink>

              </div>
              <div className="page-wrapper">
                <div className="row">
                  {CardFrequencies.map((item, index) =>{
                    return (
                      <div key={index} className="col-md-6 no-padding">
                        <CardModalDisplay
                          {...card}
                          list={arr}
                          dataType={dataType}
                          frequency={item.frequency}
                          rightBorder={item.rightBorder}
                          bottomBorder={item.bottomBorder}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </Modal>
          </div>
        )

      }else {
        return (
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              closeModal={this.toggleModal}
              enabledModal={this.state.modalIsOpen}
              contentLabel="Example Modal"
              style={topMenuOverlay}
            >
              <div className="detailTaskbar">
                <div className="DetailTaskbarViewTitle">
                  {paramTitle}
                </div>
                <NavLink to="/" className="detailNavLink" onClick={this.toggleModal}>Close</NavLink>
              </div>
              <div className="list-page-wrapper">
                <div className="no-padding">
                  <CardModalDisplay
                    {...card}
                    list={arr}
                    dataType={dataType}
                    frequency=''
                    rightBorder=''
                    bottomBorder=''
                    //index={5}
                  />
                </div>
              </div>
            </Modal>
          </div>
        );
      }
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
            PAGE NOT FOUND
            <NavLink to="/" className="navlink" onClick={this.toggleModal}>Close</NavLink>
          </div>

        </Modal>
      </div>
    );
  }
}

export default CardModal;
