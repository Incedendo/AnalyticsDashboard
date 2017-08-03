import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import dropdown from './dropdown.svg';
import infoWhite from './infoWhite.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';
import { Link } from 'react-router-dom';
import Customize from '../ModalScreens/Customize';
import ReactModal from 'react-modal';
import CardModal from '../CardDetailView/CardModal';

import { Switch, Route } from 'react-router-dom'

const extraProps = { color: 'red' };

export class Card extends Component {

  state = {
    frequency: '',
    filter: '',
    modalOpen: false,

    dataType: [],
    graph: false,
    comp: false,
    list: false,
    graphType: '',
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
      graphType: graph,
      modalOpen: false,
    })
    switch(graph) {
      case 'Line':
      case 'Bar':
      case 'Pie':
        this.setState({
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


    // console.log(this.state.dataType);

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
      <div className='title inline-block'>
        <Link to={{
          pathname: link,
          state: {
            dataType: this.state.dataType,
            graph: this.state.graph,
            comp: this.state.comp,
            list: this.state.list,
            graphType: this.state.graphType,
          }
        }}
          className="navlink"
        >
          {this.state.dataType[0]}
        </Link>
      </div>
    )
  }

  renderCardHeader = () => (
    <div className='cardHeader'>
      <div className='infoIcon' >
        <img src={infoWhite} className='info' onClick={this.handleEditClick}/>
        {this.state.modalOpen && <Customize id={this.props.id} handleSubmit={this.handleSubmit}/>}
      </div>
    </div>
  )

  render() {
    const { list, numGraph, graph, listCard, title, rightBorder, bottomBorder } = this.props;
    if(!list.length) return null
    return (
      <div className={this.getCustomClass(rightBorder, bottomBorder)} >
        {this.getTitle()}
        {this.renderCardHeader()}
        {this.getFilter(numGraph, graph, title) && this.getFreqFilter(graph)}
        {this.renderCardContent()}
      </div>
    )
  }
}
