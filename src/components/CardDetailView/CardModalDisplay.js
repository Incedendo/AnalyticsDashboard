import React, { Component } from 'react';
import '../../assets/scss/_Card.scss';
import ChartDisplay from '../Graphs/ChartDisplay';
import ListDisplay from '../Graphs/ListDisplay';
import DetailedListDisplay from '../Graphs/DetailedListDisplay';
import classNames from 'classnames';

export class CardModalDisplay extends Component {
  renderCardContent = (graph,comp,listCard, list ,dataType ,graphType ,frequency, rightBorder, bottomBorder) => {
    return(
      <div className={this.getCustomClass(listCard, rightBorder, bottomBorder)} >
        <div className='title inline-block'>
          {frequency}
        </div>

        {comp && <div className='detailedComp'>
          {this.renderComp(list ,dataType, frequency)}
        </div>}
        {graph && <div className='detailedGraph'>
          {this.renderGraph(list ,dataType ,graphType ,frequency)}
        </div>}
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

  renderComp = (list ,dataType, frequency) => {
    const localFilter = getLocalFilter(frequency);

    if(frequency === "annually") localFilter = "YTD";
    else if(frequency === "quarterly") localFilter = "QTD";
    else if(frequency === "monthly") localFilter = "MTD";
    else localFilter = "YTD";
    return <ChartDisplay listHome={list} dataType={dataType} frequency={frequency} filter={localFilter}/>
  }

  getCustomClass = (listCard, rightBorder, bottomBorder) => {
    if(rightBorder && bottomBorder) return "cardDetail border-right border-bottom";

    classNames('cardDetail', { 'border-right': rightBorder, "border-bottom":bottomBorder} });


    if(rightBorder) return "cardDetail border-right";
    if(bottomBorder) return "cardDetail border-bottom";
    if(listCard) return "full-screen";
    return "cardDetail ";
  }

  render() {
    const { title, graph, comp, listCard, graphType, list, dataType, frequency, rightBorder, bottomBorder } = this.props;

    return this.renderCardContent(graph,comp,listCard, list ,dataType ,graphType ,frequency, rightBorder, bottomBorder)
  }
}
