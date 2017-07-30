import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import dropdown from './dropdown.svg';
import {RenderChart} from '../Graphs/RenderChart';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import FreqFilter from '../utils/FreqFilter';

export class Card extends Component {

  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
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
    chartHeight='200px'
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
    const filter = this.props.numGraph || this.props.graph && this.props.title !== 'Contribution Changes' && this.props.title !== 'Retirement Income Calc Usage'

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
      </div>
    )
  }
}
