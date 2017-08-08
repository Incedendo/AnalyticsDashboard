import React, { Component } from 'react';
import '../../assets/scss/include.css';
import '../../assets/scss/detailTaskbar.css';
import '../../assets/scss/_Card.scss';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';
import { CardModalDisplay } from './CardModalDisplay';
import jsonData from '../../assets/JSON/main.js';
import cards from '../../assets/JSON/cards.js';
import DetailedListDisplay from '../Graphs/DetailedListDisplay';
import { cardTitle, CardFrequencies, topMenuOverlay, errorModal } from './CardData';

class CardModal extends Component {
  state = {
    modalIsOpen: true,
    projects: [],
    mounted: false
  }

  componentDidMount() {
    this.setState({
      projects: jsonData,
      mounted: true
    });
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
    });
  }

  renderTaskbar = (paramTitle) => (
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
  )

  renderList = (arr, dataType) => (
    <div className="list-page-wrapper no-padding full-screen ">
      <div className='listCard'>
        <DetailedListDisplay listHome={arr}  dataType={dataType}/>
      </div>
    </div>
  )

  renderNotList = (card, arr, dataType) => (
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
  )

  renderError = () => (
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
  )

  renderMainDetail = (card, paramTitle, arr, dataType) => (
    <div>
      <Modal
        isOpen={this.state.modalIsOpen}
        closeModal={this.toggleModal}
        enabledModal={this.state.modalIsOpen}
        contentLabel="Example Modal"
        style={topMenuOverlay}
      >
        {this.renderTaskbar(paramTitle)}
        {!card.listCard && this.renderNotList(card, arr, dataType)}
        {card.listCard && this.renderList(arr, dataType)}
      </Modal>
    </div>
  )

  render(){
    const { projects } = this.state;
    const paramTitle = this.props.location.state.dataType[0];
    const dataType = [];
    dataType.push(paramTitle);
    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(projects).map((key) => projects[key]);
    }
    if(cardTitle.indexOf(paramTitle) !== -1 && this.state.mounted){
      const card = {
        title: this.props.location.state.dataType[0],
        graph: this.props.location.state.graph,
        comp: this.props.location.state.comp,
        listCard: this.props.location.state.list,
        graphType: this.props.location.state.graphType,
      }
      return(
        this.renderMainDetail(card, paramTitle, arr, dataType)
      )
    }
    return(
      this.renderError()
    );
  }
}

export default CardModal;
