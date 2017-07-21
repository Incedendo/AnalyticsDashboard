import React from 'react'
import RenderChart from './RenderChart'
import PropTypes from 'prop-types';

const ChartDisplay = ({listHome=[],frequency, graphType, dataType=[],chartHeight, width }) => {

    var list = [];
    switch(frequency) {
      case 'annually':
        list = listHome[0];
        break;
      case 'quarterly':
        list = listHome[1];
        break;
      case 'daily':
        list = listHome[2];
        break;
    }

    return <RenderChart dataType={dataType} graphType={graphType} list={list} height={chartHeight} width={width}/>

}

ChartDisplay.propTypes= {
  dataType: PropTypes.array.isRequired,
  height: PropTypes.string
};

export default ChartDisplay;
