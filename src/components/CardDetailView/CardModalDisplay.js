import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import DetailedListDisplay from '../Graphs/DetailedListDisplay';
import classNames from 'classnames';

export class CardModalDisplay extends Component {

  renderCompOrGraph = (comp, graph, list ,dataType ,graphType ,frequency) => {
    if(comp)
      return <div className='detailedComp'>
        {this.renderComp(list ,dataType, frequency)}</div>
    if(graph)
      return <div className='detailedGraph'>
        {this.renderGraph(list ,dataType ,graphType ,frequency)}</div>
  }

  renderCardContent = (graph,comp,listCard, list ,dataType ,graphType ,frequency, rightBorder, bottomBorder) => {
    return(
      <div className={this.getCustomClass(listCard, rightBorder, bottomBorder)} >
        <div className='title inline-block'>
          {frequency}
        </div>

        {this.renderCompOrGraph(comp, graph, list ,dataType ,graphType ,frequency)}
      </div>
    );
  }

  renderGraph = (list ,dataType ,graphType ,frequency) => {
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
            displayedLegend
            marginTop="-80px"
        />
      </div>
    )
  }

  getLocalFilter(frequency){
    if(frequency === "annually")
      return "YTD";
    if(frequency === "quarterly")
      return "QTD";
    if(frequency === "monthly")
      return "MTD";
    if(frequency === "daily")
      return "YTD"; // placeholder for the live daily data object later, not available right now
  }

  renderComp = (list ,dataType, frequency) => {
    const localFilter = this.getLocalFilter(frequency);

    return <ChartDisplay listHome={list} dataType={dataType} frequency={frequency} filter={localFilter}/>
  }

  getCustomClass = (listCard, rightBorder, bottomBorder) => {
    const notListCard = !listCard;
    return classNames({
      "full-screen": listCard,
      'cardDetail': notListCard,
      'border-right': rightBorder,
      "border-bottom":bottomBorder
    });
  }

  render() {
    const { title,
            graph,
            comp,
            listCard,
            graphType,
            list,
            dataType,
            frequency,
            rightBorder,
            bottomBorder
          } = this.props;

    return this.renderCardContent(
      graph,
      comp,
      listCard,
      list,
      dataType,
      graphType,
      frequency,
      rightBorder,
      bottomBorder)
  }
}

// lines 52 daily and annually can be in the same if statement
//
// npm i -S classnames and use that function instead of if statements inside
// getCustomClass
