import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
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
    width='100%'
    yAxisTextSize="15"
    xAxisTextSize="15"
    />
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
    const filter = this.props.numGraph || this.props.graph && this.props.title !== 'Contribution Changes' && this.props.title !== 'Retirement Income Calc Usage'
    return (
      <div className='card col-md-3'>
        <div className='title'>
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
        </div>
      </div>
    )
  }
}
