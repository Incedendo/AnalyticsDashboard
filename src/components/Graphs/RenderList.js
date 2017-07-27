import React from 'react';
import '../../assets/scss/_RenderComp.scss'
import PropTypes from 'prop-types';
import greenArrow from './greenArrow.svg';
import redArrow from './redArrow.svg'

const RenderList = ({list=[], dataType=[], filter}) => {

  const data = list[0]
  let improve = false;
  let percent = 0;
  let sign = '';

  if(data.length > 1) {
    improve = data[1] > data[0];
    if(improve) {
      percent = Math.round([(data[1]/data[0] - 1)*100]*100)/100;
      sign = percent + '%'
    }else {
      percent = Math.round([(1 - data[1]/data[0])*100]*100)/100;
      sign = '-' + percent + '%'
    }
  }

  return (
    <div>
      {data.length > 1 &&
        <div>
          <div className='compBox row'>
            <div className="col-md-6 leftBox">
              <div className='num1'>
                {data[1]}
              </div>
              <div className='label1'>
                Current {filter}
              </div>
            </div>
            <hr className='hr1'/>
          <div className="col-md-6 rightBox">
              <div className='num2'>
                {data[0]}
              </div>
              <div className='label2'>
                Prior {filter}
              </div>
            </div>
          </div>
          <div className='arrowBox'>
            <img src={improve?greenArrow:redArrow} className={improve?'greenArrow':'redArrow'}/>
            {sign}
          </div>
        </div>
      }
      {data.length === 1 &&
        <div className='soloBox'>
          <div className='num2'>
            {data[0]}
            <div className='label'>
              Current {filter}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

RenderComp.propTypes = {
  dataType: PropTypes.array,
};

export default RenderList
