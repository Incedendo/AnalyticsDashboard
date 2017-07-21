import React, { Component } from 'react';
import './Card.css'
import dropdown from './dropdown.svg';
import {RenderChart} from '../Graphs/RenderChart'
import {CompDisplay} from '../Graphs/CompDisplay'

import ChartDisplay from '../Graphs/ChartDisplay'

export class Card extends Component {

  state = {
    graphType: '',
    dataType: '',
    frequency: 'quarterly',
    month: 'QTD',
  }

  renderGraph = () => {

    return <ChartDisplay list={this.props.list} dataType={this.state.dataType}
    graphType={this.state.graphType}
    frequency={this.state.frequency}/>
  }

  renderComp = () => {
    return <CompDisplay list={this.props.list} dataType={this.state.dataType}/>
  }

  componentWillMount () {
    this.setState({
      dataType: this.props.title,
      graphType: this.props.graphType
    })
  }

  render() {
    const filter = this.props.numGraph || this.props.graph
    return (
      <div className='card'>
        <div className='title'>
          {this.props.title}
        </div>
        {filter &&
          <div className={this.props.graph?'filter-graph':'filter'}>
            Month to Date (MTD)
            <img className='dropdown' src={dropdown} />
            {/* ADD A FILTER COMPONENT TO CHOOSE MONTH */}
          </div>
        }
        <div className='graph'>
          {this.props.graphType && this.renderGraph()}
          {this.props.numGraph && this.renderComp()}
        </div>
      </div>
    )
  }
}
