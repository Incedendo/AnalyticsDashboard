import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import CompDisplay from '../Graphs/CompDisplay';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';

export class CardModalDisplay extends Component {

  renderCardContent = (graph,numGraph,listCard, list ,dataType ,graphType ,frequency) => {
    // console.log("RenderCARDCONTENT dataType: ");
    // console.log(dataType);
    return(
      <div className='graph'>
        {graph && this.renderGraph(list ,dataType ,graphType ,frequency)}
        {numGraph && this.renderComp(list ,dataType, frequency)}
        {/* {listCard && this.renderList()} */}
      </div>
    )
  }

  renderGraph = (list ,dataType ,graphType ,frequency) => {
    let displayedLegend = true;
    // if(this.props.index === 4 || this.props.index === 6){
    //   displayedLegend = false;
    // }
    return (
      <div>
        <ChartDisplay
          listHome={list}
          dataType={dataType}
          graphType={graphType}
          frequency={frequency}
            chartHeight='28vh'
            width='90%'
            yAxisTextSize="18"
            xAxisTextSize="18"
            pointRadius="0"
            legendFontSize="15"
            displayedLegend={displayedLegend}
            marginTop="-80px"
        />
      </div>
    )
  }

  renderComp = (list ,dataType, frequency) => {
    // console.log("Render COMP dataType: ");
    // console.log(list);
    // console.log("Render COMP dataType frequency ");
    // console.log(frequency);
    let localFilter;
    if(frequency === "annually") localFilter = "MTD";
    if(frequency === "quarterly") localFilter = "QTD";
    if(frequency === "monthly") localFilter = "WTD";
    if(frequency === "today") localFilter = "YTD";
    return <CompDisplay listHome={list} dataType={dataType} frequency={frequency} graphType="" filter={localFilter}/>
  }

  renderList = (list, index) => {
    return (
      <ListDisplay listHome={list} cardIndex={this.props.index}/>
    );
  }

  getCustomClass = (rightBorder, bottomBorder) => {
    if(rightBorder && bottomBorder) return "cardDetail border-right border-bottom";
    if(rightBorder) return "cardDetail border-right";
    if(bottomBorder) return "cardDetail border-bottom";
    return "cardDetail ";
  }

  getTitle = () => {
    const link = '/' + this.state.dataType[0].replace(/\s/g, '');
    return (
      <div className='title inline-block'>
        {this.state.dataType[0]}
      </div>
    )
  }

  render() {
    const { title, graph, numGraph, listCard, graphType, list, dataType, frequency, rightBorder, bottomBorder } = this.props;
    // console.log("title: " +title  );
    // console.log("graph: " +graph  );
    // console.log("numGraph: " + numGraph );
    // console.log("listCard: " + listCard );
    // console.log("graphType: " + graphType );
    // console.log("dataType in MAIN render CArd Modal Display: " );
    // console.log(dataType);
    // console.log("frequency: " + frequency );
    // console.log("print list: ");
    // console.log(list);
    return (
      <div className={this.getCustomClass(rightBorder, bottomBorder)} >
        <div className='title inline-block'>
          {frequency}
        </div>

        {this.renderCardContent(graph,numGraph,listCard, list ,dataType ,graphType ,frequency)}
      </div>
    )
  }
}
