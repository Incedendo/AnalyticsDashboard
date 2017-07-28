import React from 'react';
import RenderComp from './RenderComp';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const ListDisplay = ({listHome=[], cardIndex}) => {

  // the 5th card is TOP ACTIVE PAGES
  if(cardIndex == 5){
    const list = listHome[4];
    return(
      <div className="enclose">
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span>{item.Entries}</span>
                <span>{item.Percentage}</span>
              </div>
            )
        })}
      </div>
    );
  }else{
    // The 7th card is the TOP PAGES
    const list = listHome[5];
    return (
      <div className="enclose">
        {list.map((item, index) =>{
            return(
              <div key={index} className="page">
                <span>{item.Page}</span>
                <span>{item.PageViews}</span>
                <span>{item.Percentage}</span>
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
