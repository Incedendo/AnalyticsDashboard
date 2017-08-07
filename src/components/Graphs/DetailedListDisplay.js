import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/_ListDisplay.scss';

const getMaxPercentage = (listHome, index) => {
  const list = listHome[index];
  const sliced = list.slice(0,26);
  let max = 0;
  var i = 0;
  let first = 0;
  let second = 0;
  for(; i < sliced.length - 1; i++){
    let curMax = sliced[i].Percentage.substring(0, sliced[i].Percentage.length-1) - sliced[i+1].Percentage.substring(0, sliced[i+1].Percentage.length-1);

    if (curMax > max){
      max = curMax;
      first = i;
      second = i+1;
    }

  }
  return [max, first, second];

}

const renderList = (listHome, index) => {
  const list = listHome[index];
  const sliced = list.slice(0,26);
  let max, start, end;

  [max, start, end ] = getMaxPercentage(listHome, index);
  console.log("start: " + start);
  return(
    <div className="enclose">
      <h1>Greatest Cut Off Percentage: {max}% From {sliced[start].Page} To {sliced[end].Page} </h1>
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

const ListDisplay = ({listHome=[], dataType = []}) => {
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
