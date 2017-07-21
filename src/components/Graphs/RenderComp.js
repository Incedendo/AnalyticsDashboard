import React from 'react';
import './RenderComp.css'

export const RenderComp = (props) => {

  return (
    <div className='compBox'>
      <div className='num1'>
        283
        <div className='label'>
          Prior {props.dataType}
        </div>
      </div>
      <hr/>
    <div className='num2'>
        492
        <div className='label'>
          Current {props.dataType}
        </div>
      </div>
      {/* {props.graphType === 'MTD' && this.month()} */}
    </div>
  )
}
