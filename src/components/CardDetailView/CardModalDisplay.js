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
      return "YTD";
  }

  renderComp = (list ,dataType, frequency) => {
    const localFilter = this.getLocalFilter(frequency);

    return <ChartDisplay listHome={list} dataType={dataType} frequency={frequency} filter={localFilter}/>
  }

  getCustomClass = (listCard, rightBorder, bottomBorder) => {
    // const notListCard = !listCard;
    // return classNames({
    //   "full-screen": listCard,
    //   'cardDetail': notListCard,
    //   'border-right': rightBorder,
    //   "border-bottom":bottomBorder
    // });

    if(rightBorder && bottomBorder) return "cardDetail border-right border-bottom";
    if(rightBorder) return "cardDetail border-right";
    if(bottomBorder) return "cardDetail border-bottom";
    if(listCard) return "full-screen";
    return "cardDetail ";
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

// line 15-20, can both of these be true? if not extract into function that only
// returns one
// line 26 displayedLegend could be a const
// lines 48-52 should be a getLocalFilter function that uses if statments to
// return. Also, daily and annually can be in the same if statement
//
// npm i -S classnames and use that function instead of if statments inside
// getCustomClass
//
// There are also some weird spacing/commas issues in the arguments and params
// for renderCardContent
// If cuntion or destructuring gets too long, break onto new lines:
//
// const {
//   title,
//   graph,
//   etc.
// } = this.props;
//
