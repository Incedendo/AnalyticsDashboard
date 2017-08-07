export const cardTitle = [
  'Total Visits',
  'Unique Visits',
  'Sign Ups',
  'Sign Ins',
  'Unique User Login',
  'Registrations',
  'Enrollments',
  'Suspicious Enrollments',
  'Contribution Changes',
  'Bounce Rate',
  'Retirement Income Calc Usage',
  'Top Pages',
  'Visits by Device Type'
];

export const CardFrequencies = [
  {
    frequency: "annually",
    rightBorder: true,
    bottomBorder: true
  },
  {
    frequency: "quarterly",
    rightBorder: false,
    bottomBorder: true
  },
  {
    frequency: "weekly",
    rightBorder: true,
    bottomBorder: false
  },
  {
    frequency: "daily",
    rightBorder: false,
    bottomBorder: false
  }
];

export const topMenuOverlay = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)',
      zIndex            : 200,
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : '#022753',
      color                      : 'white',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
    }
};

export const errorModal = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'red'
    },
    content : {
      position                   : 'absolute',
      top                        : '0px',
      left                       : '0px',
      right                      : '0px',
      bottom                     : '0px',
      border                     : '1px solid #ccc',
      background                 : 'red',
      color                      : 'white',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px',
    }
};
