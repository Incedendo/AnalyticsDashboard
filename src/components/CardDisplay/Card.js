import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import dropdown from './dropdown.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import Modal from 'react-modal';

const customStyles = {

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

  render() {
    if(!this.props.list.length) return null
    const filter = this.props.numGraph || this.props.graph ||  this.props.title == 'Contribution Changes' || this.props.title == 'Retirement Income Calc Usage'

    let customClass = "";

    if(this.props.rightBorder && this.props.bottomBorder){
      customClass = "card col-md-3 border-right border-bottom";
    }else if(this.props.rightBorder){
      customClass = "card col-md-3 border-right";
    }else if(this.props.bottomBorder){
      customClass = "card col-md-3 border-bottom";
    }else{
      customClass = "card col-md-3";
    }

    return (
      <div className={customClass} >
        <div>
          <button className="threeDots" onClick={this.toggleModal}>
            <div className="threeDotsText">
              ...
            </div>
          </button>
        </div>

        <div className='title inline-block'>
          {this.props.title}
        </div>

        {filter &&
          <div className={this.props.graph?'filter-graph':'filter'}>
            <FreqFilter handleFilter={this.handleFilter}/>
          </div>
        }

        <div className='graph'>
          {this.props.graph && this.renderGraph()}
          {this.props.numGraph && this.renderComp()}
          {this.props.listCard && this.renderList()}
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
          closeModal={this.toggleModal}
          enabledModal={this.state.modalIsOpen}
          style={customStyles}
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
      </div>
    )
  }
}
