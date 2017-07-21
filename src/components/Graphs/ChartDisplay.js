import React from 'react'
import RenderChart from './RenderChart'
import PropTypes from 'prop-types';

const ChartDisplay = ({listHome=[],frequency, graphType, dataType=[]}) => {

    console.log(listHome);

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

    return <RenderChart dataType={dataType} graphType={graphType} list={list} />
}

ChartDisplay.propTypes= {
  dataType: PropTypes.array.isRequired,
};

export default ChartDisplay;
