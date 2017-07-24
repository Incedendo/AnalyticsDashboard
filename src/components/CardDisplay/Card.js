import React, { Component } from 'react';
import './Card.css'
import dropdown from './dropdown.svg';
import {RenderChart} from '../Graphs/RenderChart'
import CompDisplay from '../Graphs/CompDisplay'
import ChartDisplay from '../Graphs/ChartDisplay'
import FreqFilter from '../utils/FreqFilter'

export class Card extends Component {

  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
  }

  handleFilter = (id) => {

    this.setState({
      filter: id
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
    return <ChartDisplay listHome={this.props.list} dataType={this.state.dataType}
    graphType={this.state.graphType}
    frequency={this.state.frequency}
    chartHeight='275px'
    width='490px'/>
  }

  renderComp = () => {
    return <CompDisplay listHome={this.props.list} dataType={this.state.dataType} frequency={this.state.frequency}/>
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
    const filter = this.props.numGraph || this.props.graph
    return (
      <div className='card'>
        <div className='title'>
          {this.props.title}
        </div>
        {filter &&
          <div className={this.props.graph?'filter-graph':'filter'}>
            {/* Month to Date (MTD)
            <img className='dropdown' src={dropdown} /> */}
            <FreqFilter handleFilter={this.handleFilter}/>
            {/* ADD A FILTER COMPONENT TO CHOOSE MONTH */}
          </div>
        }
        <div className='graph'>
          {this.props.graph && this.renderGraph()}
          {this.props.numGraph && this.renderComp()}
        </div>
      </div>
    )
  }
}
