import React, { Component } from 'react';
import '../../assets/scss/include.css';
import '../../assets/scss/detailTaskbar.css';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';
import { CardModalDisplay } from './CardModalDisplay';
import jsonData from '../../assets/JSON/main.js';
import cards from '../../assets/JSON/cards.js';
import { cardTitle, CardFrequencies, topMenuOverlay, errorModal } from './CardData';

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
    const title = this.props.match.params.title;
    switch(title){
      case 'TotalVisits':
        return 'Total Visits';
      case 'UniqueVisits':
        return 'Unique Visits';
      case 'SignUps':
        return "Sign Ups";
      case 'SignIns':
        return "Sign Ins";
      case 'UniqueUserLogin':
        return "Unique User Login";
      case 'Registrations':
        return "Registrations";
      case 'Enrollments':
        return "Enrollments";
      case 'SuspiciousEnrollments':
        return 'Suspicious Enrollments';
      case 'ContributionChange':
        return "Contribution Change";
      case 'BounceRate':
        return "Bounce Rate";
      case 'RetirementIncomeCalcUsage':
        return "Retirement Income Calc Usage";
      case 'TopPages':
        return "Top Pages";
      case 'VisitsbyDeviceType':
        return "Visits by Device Type";
    }
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
              <div className="detailTaskbarCloseBut">
                <NavLink to="/" className="detailNavLink btn-close-task" onClick={this.toggleModal}>
                  <svg className="x" width="32px" height="33px" viewBox="0 0 32 33" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="#ffffff" strokeWidth="" fill="none" fillRule="evenodd">
                      <g id="Custom-Preset" transform="translate(0.000000, 1.000000)">
                        <g id="Group">
                          <path d="M32,32 L0,0" id="Path"></path>
                          <path d="M0,32 L32,-1.77635684e-15 L0,32 Z" id="Path"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </div>
            </div>
            {!card.listCard &&
              <div className="page-wrapper">
                <div className="row">
                  {CardFrequencies.map((item, index) =>{
                    return (<div key={index} className="col-md-6 no-padding">
                        <CardModalDisplay
                          {...card}
                          list={arr}
                          dataType={dataType}
                          frequency={item.frequency}
                          rightBorder={item.rightBorder}
                          bottomBorder={item.bottomBorder}
                        />
                      </div>)
                  })}
                </div>
              </div>
            }
            {card.listCard &&
              <div className="list-page-wrapper">
                <div className="no-padding">
                  <CardModalDisplay
                    {...card}
                    list={arr}
                    dataType={dataType}
                    frequency=''
                    rightBorder=''
                    bottomBorder=''
                  />
                </div>
              </div>
            }
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
            <h1>
              PAGE NOT FOUND
            </h1>
            <NavLink to="/" className="navlink" onClick={this.toggleModal}>Close</NavLink>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CardModal;
