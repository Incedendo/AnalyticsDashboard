import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import dropdown from './dropdown.svg';
import infoWhite from './infoWhite.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import Customize from '../ModalScreens/Customize';
import ReactModal from 'react-modal';

export class Card extends Component {

  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
    modalOpen: false,
    graph: false,
    comp: false,
    list: false,
  }

  handleEditClick = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen}
    })
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

  handleSubmit = (data, graph) => {
    this.setState({
      dataType: data,
      graphType: graph
    })
    switch(this.state.graphType) {
      case 'Line', 'Bar': this.setState({
        graph: true,
        comp: false,
        list: false,
      })
        break;
      case 'Comp': this.setState({
        graph: false,
        comp: true,
        list: false,
      })
        break;
      case 'List': this.setState({
        graph: false,
        comp: false,
        list: true,
      })
      break;
    }

    console.log(this.state.dataType);
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
    if(this.props.graph){
      this.setState({
        graph: true
      })
    }else if(this.props.numGraph){
      this.setState({
        comp: true
      })
    }else{
      this.setState({
        list: true
      })
    }
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
      <div className={customClass}>
        <div className='cardHeader'>
          <div className='title inline-block' >
            {this.state.dataType[0]}
          </div>

          <div className='infoIcon' >
            <img src={infoWhite} className='info' onClick={this.handleEditClick}/>
          {this.state.modalOpen && <Customize id={this.props.id} handleSubmit={this.handleSubmit}/>}
          </div>
        </div>
        {filter &&
          <div className={this.props.graph?'filter-graph':'filter'}>
            <FreqFilter handleFilter={this.handleFilter}/>
          </div>

        }

        <div className='graph'>
          {this.state.graph && this.renderGraph()}
          {this.state.comp && this.renderComp()}
          {this.state.list && this.renderList()}
        </div>
      </div>
    )
  }
}
