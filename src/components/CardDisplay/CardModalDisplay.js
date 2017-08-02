import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';

export class CardModalDisplay extends Component {

  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
    graph: false,
    comp: false,
    list: false,
  }

  renderGraph = () => {
    let displayedLegend = true;
    if(this.props.index === 4 || this.props.index === 6){
      displayedLegend = false;
    }
    return <ChartDisplay listHome={this.props.list} dataType={this.props.dataType}
    graphType={this.props.graphType}
    frequency={this.props.frequency}
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

  getTitle = () => {
    const link = '/' + this.state.dataType[0].replace(/\s/g, '');
    return (
      <div className='title inline-block'>
        {this.state.dataType[0]}
      </div>
    )
  }

  render() {
    const { list, numGraph, graph, listCard, title, rightBorder, bottomBorder } = this.props;
    if(!list.length) return null
    return (
      <div className={this.getCustomClass(rightBorder, bottomBorder)} >
        {this.getTitle()}
        {this.renderCardContent()}
      </div>
    )
  }
}
