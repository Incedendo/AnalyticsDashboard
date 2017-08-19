import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const renderList = (listHome, index) => {
  const sliced = listHome[index].slice(0,5);
  return(
    <div className="enclose">
      <div className="page pageHeader">
        <span>Page Rank</span>
        <span className="secondSpan">Views</span>
        <span className="lastSpan">%</span>
      </div>
      {sliced.map((item, index) =>{
        const {Page, PageViews, Percentage} = item;
        return(
          <div key={index} className="page">
            <span>{Page}</span>
            <span className="secondSpan">{PageViews}</span>
            <span className="lastSpan">{Percentage}</span>
          </div>
        )
      })}
    </div>
  );
}

/*
  Since this data is categorical, the data can be extracted straight from the entire data list.
*/
const ListDisplay = ({listHome=[], dataType = []}) => {
  switch(dataType[0]) {
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

// line 6 could just be list = listHome[index].slice(0,5);
//
// line 15, could destructure item into ({ Page, PageViews, Percentage }, index)
//
// line 32 could be a const

