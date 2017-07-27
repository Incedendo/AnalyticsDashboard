import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const ListDisplay = ({listHome=[], graphType, dataType=[], frequency, filter}) => {

  const list = listHome[4];
  return (
    <div className="enclose">
      {list.map((item, index) =>{
        return(
          <div key={index} className="page">
          {item.Page} : {item.PageViews} : {item.Percentage}
          </div>
        )
      })}
    </div>
  );

}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
