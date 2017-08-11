import React, { Component } from 'react';
import '../../assets/scss/include.css';
import '../../assets/scss/_cardModal.scss';
import '../../assets/scss/_detailTaskbar.scss';
import '../../assets/scss/_Card.scss';
import DetailedListDisplay from '../Graphs/DetailedListDisplay';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';
import { CardModalDisplay } from './CardModalDisplay';
import jsonData from '../../assets/JSON/main.js';
import { cardTitle, CardFrequencies, topMenuOverlay, errorModal } from './CardData';

class CardModal extends Component {
  state = {
    modalIsOpen: true,
    mounted: false
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  renderSeparateTitle = (dataType) => (
     dataType.map((title) => {
      const isNotLast = dataType.indexOf(title) !== dataType.length-1;
      if(isNotLast){
        return <span>{title} - </span>
      }
      return <span>{title}</span>
    })
  )

  renderTaskbar = (dataType) => (
    <div className="detailTaskbar">
      <div className="DetailTaskbarViewTitle">
        {this.renderSeparateTitle(dataType)}
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
        <DetailedListDisplay listHome={arr} dataType={dataType}/>
      </div>
    </div>
  )

  getModalProps(){
    return ({
      isOpen: this.state.modalIsOpen,
      closeModal: this.toggleModal,
      enabledModal: this.state.modalIsOpen
    })
  }

  renderNotList = (card, arr, dataType) => (
    <div className="page-wrapper">
      <div className="row">
        {CardFrequencies.map((item, index) =>{
          const { frequency, rightBorder, bottomBorder } = item;
          return (<div key={index} className="col-md-6 no-padding">
              <CardModalDisplay
                {...card}
                list={arr}
                dataType={dataType}
                frequency={frequency}
                rightBorder={rightBorder}
                bottomBorder={bottomBorder}
              />
            </div>)
        })}
      </div>
    </div>
  )

  renderError = () => (
    <div>
      <Modal
        {...this.getModalProps()}
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

  renderIndivContent = (card, dataType, arr) => {
    if(!card.listCard && dataType[0] === "Visits by Device Type")
      return this.renderList(arr, dataType);
    if(!card.listCard && dataType !== "Visits by Device Type")
      return this.renderNotList(card, arr, dataType);
    if(card.listCard)
      return this.renderList(arr, dataType);
  }

  renderMainDetail = (card, arr, dataType) => (
    <div>
      <Modal
        isOpen={this.state.modalIsOpen}
        closeModal={this.toggleModal}
        enabledModal={this.state.modalIsOpen}
        style={topMenuOverlay}
      >
        {this.renderTaskbar(dataType)}
        {this.renderIndivContent(card, dataType, arr)}
      </Modal>
    </div>
  )

  render(){
    const { dataType,
            graph,
            comp,
            list,
            graphType,
            } = this.props.location.state;

    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(jsonData).map((key) => jsonData[key]);
    }
    if(cardTitle.indexOf(dataType[0]) !== -1 && this.state.mounted){
      const card = {
        title: dataType,
        graph: graph,
        comp: comp,
        listCard: list,
        graphType: graphType,
      }
      return(
        this.renderMainDetail(card, arr, dataType)
      )
    }
    return(
      this.renderError()
    );
  }
}

export default CardModal;

// why do we use mounted here?
