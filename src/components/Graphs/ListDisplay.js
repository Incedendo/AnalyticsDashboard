import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const ListDisplay = ({listHome=[], cardIndex}) => {

  // the 5th card is TOP ACTIVE PAGES
  if(cardIndex == 5){
    const list = listHome[5];
    return(
      <div className="enclose">
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
              {item.Page} : {item.Entries} : {item.Percentage}
              </div>
            )
        })}
      </div>
    );
  }else{
    // The 7th card is the TOP PAGES
    const list = listHome[6];
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
}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
