import React from 'react';
import '../../assets/scss/_RenderComp.scss'
import PropTypes from 'prop-types';
import greenArrow from '../../assets/svg/greenArrow.svg';
import redArrow from '../../assets/svg/redArrow.svg'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const renderBox = (boxPosition, boxNum, boxState, index, data, label, filter) => {
  let className = '';
  boxPosition === 'leftBox' ? className="col-md-6 leftBox" : className="col-md-6 rightBox";

  return(
    <div className={className}>
      <div className={boxNum}>
        {numberWithCommas(data[index])}
      </div>
      <div className={label}>
        {boxState} {filter}
      </div>
    </div>
  )
}

const renderOneData = (data, filter) => (
  <div className="col-md-6 soloBox">
      <div className='soloNum'>
        {data[data.length - 1]}
      </div>
      <div className='soloLabel'>
        Current {filter}
      </div>
  </div>
)

const renderMoreThanOneData = (data, filter, improve, sign, greenArrow, redArrow) => {
  return (<div>
    <div className='compBox row'>
      {renderBox("leftBox", 'num1', "Current", data.length - 1, data, "label1", filter)}
      <hr className='hr1'/>
    {renderBox("rightBox", 'num2', "Prior", data.length - 2, data, "label2", filter)}
    </div>
    <div className='arrowBox'>
      <img src={improve?greenArrow:redArrow} alt="c" className={improve?'greenArrow':'redArrow'}/>
      {sign}
    </div>
  </div>)
}

const renderComparison = (data, filter, improve, sign, greenArrow, redArrow) => (
  <div>
    {data.length > 1 && renderMoreThanOneData(data, filter, sign, improve, greenArrow, redArrow)}
    {data.length === 1 && renderOneData(data, filter)}
  </div>
)

const RenderComp = ({dataArr=[], dataType=[], filter}) => {
  const data = dataArr[0]
  let improve = false;
  let percent = 0;
  let sign = '';
  if(data.length > 1) {
    improve = data[1] > data[0];
    if(improve) {
      percent = Math.round([(data[1]/data[0] - 1)*100]*100)/100;
      sign = percent + '%';
    }else {
      percent = Math.round([(1 - data[1]/data[0])*100]*100)/100;
      sign = '-' + percent + '%';
    }
  }
  return (
    renderComparison(data, filter, sign, improve, greenArrow, redArrow)
  )
}

RenderComp.propTypes = {
  dataType: PropTypes.array,
};

export default RenderComp
