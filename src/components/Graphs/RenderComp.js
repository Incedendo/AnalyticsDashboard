import React from 'react';
import './RenderComp.css'
import PropTypes from 'prop-types';

const RenderComp = ({list=[], dataType=[]}) => {

  return (
    <div className='compBox'>
      <div className='num1'>
        {list[0][0]}
        <div className='label'>
          Prior {dataType[0]}
        </div>
      </div>
      <hr/>
      <div className='num2'>
        {list[0][1]}
        <div className='label'>
          Current {dataType[0]}
        </div>
      </div>
      {/* {props.graphType === 'MTD' && this.month()} */}
    </div>
  )
}

RenderComp.propTypes = {
  dataType: PropTypes.array,
};

export default RenderComp
