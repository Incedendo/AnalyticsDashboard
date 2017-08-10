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
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
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

  renderMainDetail = (card, arr, dataType) => (
    <div>
      <Modal
        isOpen={this.state.modalIsOpen}
        closeModal={this.toggleModal}
        enabledModal={this.state.modalIsOpen}
        contentLabel="Example Modal"
        style={topMenuOverlay}
      >
        {this.renderTaskbar(dataType)}
        {!card.listCard && dataType[0] === "Visits by Device Type" && this.renderList(arr, dataType)}
        {!card.listCard && dataType !== "Visits by Device Type" && this.renderNotList(card, arr, dataType)}
        {card.listCard && this.renderList(arr, dataType)}
      </Modal>
    </div>
  )

  render(){
    const paramTitle = this.props.location.state.dataType;
    const dataType = this.props.location.state.dataType;

    let arr=[];
    if(this.state.mounted){
      arr = Object.keys(jsonData).map((key) => jsonData[key]);
    }
    if(cardTitle.indexOf(paramTitle[0]) !== -1 && this.state.mounted){
      const card = {
        title: this.props.location.state.dataType,
        graph: this.props.location.state.graph,
        comp: this.props.location.state.comp,
        listCard: this.props.location.state.list,
        graphType: this.props.location.state.graphType,
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

// many of the same fixes as Home.js (mounted, toggleModal(), refactors)
//
// line 79 item could be destructured ({ frequency, rightBorder, bottomBorder })
// => {}
//
// renderError and renderMainDetail, the <Modal/> could be extracted into a
// renderModal() method that takes styleType as an arg, so you don't have to
// keep repeating the same code in both methods
//
// lines 124-126 do you intend for it to be possible for all of these conditions
// to be true? If not, then extract into a function that only returns one of the
// options to prevent extra checks
//
// lines 133-134 are confusing and seem unneccessary. Destructure
// this.props.location.state to get all the variables you need for lines 140
// onwards.
//
// Same as Home.js arr; could be written differently
//
// Add some new lines between code chunks in the render method to make things a
// bit easier to read
