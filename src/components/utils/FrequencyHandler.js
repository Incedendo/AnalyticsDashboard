import React from 'react';

const FrequencyHandler = ({filter, handleFrequency}) => {
  let freq = ''
  switch(filter) {
    case 'QTD':
      freq = 'quarterly'
      break;
    case 'MTD':
      freq = 'weekly'
      break;
    case 'YTD':
      freq = 'annually'
      break;
    // case 'WTD':
    //   newState.frequency = 'weekly'
    //   break;
  }
  console.log('what am i doing?')
  handleFrequency(freq);
  return;

}

export default FrequencyHandler;
