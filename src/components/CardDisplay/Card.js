import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import dropdown from './dropdown.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import Modal from 'react-modal';

const CardOverlayStyle = {
    overlay : {
      position          : 'fixed',
      top               : "20%",
      left              : "20%",
      right             : "20%",
      bottom            : "20%",
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
      padding                    : '20px'
    }
};

export class Card extends Component {

  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
    modalIsOpen: false,
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
    });
    console.log("Modal toggled");
  }

  handleFilter = (id) => {

    this.setState({
      filter: id,
    })
    switch(id) {
      case 'QTD':
        this.setState({
          frequency: 'quarterly'
        })
        break;
      case 'MTD': this.setState({
        frequency: 'annually'
      })
        break;
      case 'YTD': this.setState({
        frequency: 'daily'
      })
        break;
      case 'WTD': this.setState({
        frequency: 'weekly'
      })
        break;
    }
  }

  renderGraph = () => {
    let displayedLegend = true;
    if(this.props.index == 4 || this.props.index == 6){
      displayedLegend = false;
    }
    return <ChartDisplay listHome={this.props.list} dataType={this.state.dataType}
    graphType={this.state.graphType}
    frequency={this.state.frequency}
    chartHeight='170px'
    width='100%'
    yAxisTextSize="18"
    xAxisTextSize="18"
    pointRadius="0"
    legendFontSize="15"
    displayedLegend={displayedLegend}
    marginTop="-80px"
    />
  }

  renderComp = () => {
    return <CompDisplay listHome={this.props.list} dataType={this.state.dataType} frequency={this.state.frequency} filter={this.state.filter}/>
  }

  renderList = () => {
    console.log("calling LIST: KEY = " + this.props.index);
    return (
      <ListDisplay listHome={this.props.list} cardIndex={this.props.index}/>
    );
  }

  componentWillMount () {
    var arr = this.props.data.slice();
    this.setState({
      dataType: arr,
      graphType: this.props.graphType,
      filter: 'QTD',
      frequency: 'quarterly'
    })

  }

  getCustomClass = (rightBorder, bottomBorder) => {
    if(rightBorder && bottomBorder) return "card col-md-3 border-right border-bottom";
    if(rightBorder) return "card col-md-3 border-right";
    if(bottomBorder) return "card col-md-3 border-bottom";

    return "card col-md-3";
  }

  renderModal = () => (
    <Modal
      isOpen={this.state.modalIsOpen}
      contentLabel="Example Modal"
      closeModal={this.toggleModal}
      enabledModal={this.state.modalIsOpen}
      style={CardOverlayStyle}
    >

      <div className="">
        <div className="taskbar">
          <button className="btn-close-task" onClick={this.toggleModal}>
            {/* <img className="x" src={closeButton} /> */}
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

          </button>
        </div>
      </div>

    </Modal>
  )

  renderThreeDotModalButton = () => (
    <div>
      <button className="threeDots" onClick={this.toggleModal}>
        <div className="threeDotsText">
          ...
        </div>
      </button>
    </div>
  )

  renderCardContent = (graph, numGraph, listCard) => (
    <div className='graph'>
      {graph && this.renderGraph()}
      {numGraph && this.renderComp()}
      {listCard && this.renderList()}
    </div>
  )

  getFilter = (numGraph, graph, title) => {
    return numGraph || graph ||  title == 'Contribution Changes' || title == 'Retirement Income Calc Usage';
  }

  getFreqFilter = (graph) => (
    <div className={graph?'filter-graph':'filter'}>
      <FreqFilter handleFilter={this.handleFilter}/>
    </div>
  )

  getTitle = (title) => (
    <div className='title inline-block'>
      {title}
    </div>
  )

  render() {
    const { list, numGraph, graph, listCard, title, rightBorder, bottomBorder } = this.props;
    if(!list.length) return null
    return (
      <div className={this.getCustomClass(rightBorder, bottomBorder)} >
        {this.renderThreeDotModalButton()}
        {this.getTitle(title)}
        {this.getFilter(numGraph, graph, title) && this.getFreqFilter(graph)}
        {this.renderCardContent(graph, numGraph, listCard)}
        {this.renderModal()}
      </div>
    )
  }
}
