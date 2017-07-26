import React from 'react'
import RenderChart from './RenderChart'
import PropTypes from 'prop-types';

const ChartDisplay = ({listHome=[],frequency, graphType, dataType=[],chartHeight, width, margin, yAxisTextSize, xAxisTextSize }) => {

    var list = [];
    switch(frequency) {
      case 'annually':
        list = listHome[0];
        break;
      case 'quarterly':
        list = listHome[1];
        break;
      case 'weekly':
        list = listHome[2];
        break;
      case 'daily':
        list = listHome[3];
        break;
    }

    console.log("y-axis text size: "+ yAxisTextSize);

    return <RenderChart
      dataType={dataType}
      graphType={graphType}
      list={list}
      height={chartHeight} width={width} margin={margin}
      yAxisTextSize={yAxisTextSize}
      xAxisTextSize={xAxisTextSize} />
}

ChartDisplay.propTypes= {
  dataType: PropTypes.array.isRequired,
  height: PropTypes.string
};

export default ChartDisplay;
