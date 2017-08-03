import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import pencilIcon from '../../assets/svg/pencilIcon.svg';
import dropdown from './dropdown.svg';
import infoWhite from './infoWhite.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';


import { NavLink } from 'react-router-dom';

import Customize from '../ModalScreens/Customize';
import ReactModal from 'react-modal';

const stateArray = ['graphType' ,'dataType','frequency','filter','graph','comp','list'];

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
    let newState = {filter: id, frequency: ''}
    switch(id) {
      case 'QTD':
          newState.frequency = 'quarterly'
        break;
      case 'MTD':
        newState.frequency = 'annually'
        break;
      case 'YTD':
        newState.frequency = 'daily'
        break;
      case 'WTD':
        newState.frequency = 'weekly'
        break;
    }
    this.setState(newState);
  }

  handleSubmit = (data, graph) => {
    let newState = {
      dataType: data,
      graphType: graph,
      modalOpen: false,
      graph: false,
      comp: false,
      list: false,
    }
    switch(graph) {
      case 'Line':
      case 'Bar':
      case 'Pie':
        newState.graph = true;
        break;
      case 'Comp':
        newState.comp = true;
        break;
      case 'List':
        newState.list = true;
        break;
    }
    this.setState(newState)
  }

  renderGraph = () => {
    let displayedLegend = true;
    let categorical = false;
    switch (this.state.dataType[0]) {
      case 'Visits by Device Type':
        categorical = true;
        break;
    }
    if(this.props.index == 4 || this.props.index == 6){
      displayedLegend = false;
    }
    return <ChartDisplay listHome={this.props.list} dataType={this.state.dataType}
    graphType={this.state.graphType}
    frequency={this.state.frequency}
    categorical={categorical}
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
      <ListDisplay listHome={this.props.list} cardIndex={this.props.index} dataType={this.state.dataType}/>
    );
  }

  componentWillMount () {
    if(sessionStorage.getItem(this.props.id)) {
      let newState = sessionStorage.getItem(this.props.id);
      this.setState(JSON.parse(newState));
    }
    else {
      let arr = this.props.data.slice();
      let newState = this.state;

      newState.dataType = arr;
      newState.graphType = this.props.graphType;
      newState.filter = 'QTD';
      newState.frequency = 'quarterly';

      if(this.props.graph){
        newState.graph = true;
      }else if(this.props.numGraph){
          newState.comp = true;
      }else{
          newState.list = true;
      }
      this.setState(newState);
    }
  }

  store = () => {
    let newState = this.state;
    sessionStorage.setItem(this.props.id, JSON.stringify(newState));
  }

  getCustomClass = (rightBorder, bottomBorder) => {
    if(rightBorder && bottomBorder) return "card col-md-3 border-right border-bottom";
    if(rightBorder) return "card col-md-3 border-right";
    if(bottomBorder) return "card col-md-3 border-bottom";

    return "card col-md-3";
  }

  renderCardContent = () => (

    <div className='graph'>
      {this.state.graph && this.renderGraph()}
      {this.state.comp && this.renderComp()}
      {this.state.list && this.renderList()}
    </div>
  )

  getFilter = (numGraph, graph, title) => {
    return numGraph || graph ||  title === 'Contribution Change' || title === 'Retirement Income Calc Usage';
  }

  getFreqFilter = (graph) => (
    <div className={graph?'filter-graph':'filter'}>
      <FreqFilter handleFilter={this.handleFilter}/>
    </div>
  )

  getTitle = () => {
    const link = '/' + this.state.dataType[0].replace(/\s/g, '');
    return (
      <div className='cardHeader'>
        <div className='title inline-block'>
          <NavLink to={link}w className="navlink">{this.state.dataType[0]}</NavLink>
        </div>
        <div className='infoIcon' >
            <img src={pencilIcon} className='info' onClick={this.handleEditClick}/>
            {this.state.modalOpen && <Customize id={this.props.id} handleSubmit={this.handleSubmit} handleCancel={this.handleEditClick}/>}
        </div>
      </div>
    )
  }

  render() {
    const { list, numGraph, graph, listCard, title, rightBorder, bottomBorder } = this.props;
    if(!list.length) return null
    if(!this.state.dataType.length) return <div>LOADING</div>
    return (
      <div className={this.getCustomClass(rightBorder, bottomBorder)} >
        {this.getTitle()}
        {/* {this.renderCardHeader()} */}
        {this.getFilter(numGraph, graph, title) && this.getFreqFilter(graph)}
        {this.renderCardContent()}
        {this.store()}
      </div>
    )
  }
}
