import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const renderList = (listHome, index) => {
  const list = listHome[index];
  const sliced = list.slice(0,26);
  return(
    <div className="enclose">
      <div className="page pageHeader">
        <span>Page Rank</span>
        <span className="secondSpan">Views</span>
        <span className="lastSpan">%</span>
      </div>
      {sliced.map((item, index) =>{
          return(
            <div key={index} className="page">
              <span>{item.Page}</span>
              <span className="secondSpan">{item.PageViews}</span>
              <span className="lastSpan">{item.Percentage}</span>
            </div>
          )
      })}
    </div>
  );
}


const ListDisplay = ({listHome=[], cardIndex, dataType = []}) => {
  // the 5th card is TOP ACTIVE PAGES
  let data = dataType[0]
  switch(data) {
    case 'Bounce Rate':
      return renderList(listHome, 4);
    case 'Top Pages':
      return renderList(listHome, 5);
  }
}

ListDisplay.propTypes = {
  list: PropTypes.array,
};

export default ListDisplay;
