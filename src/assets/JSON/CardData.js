export const cardTitle = [
  'Total Visits',
  'Unique Visits',
  'Sign Ups',
  'Sign Ins',
  'Unique User Login',
  'Registrations',
  'Enrollments',
  'Suspicious Enrollments',
  'Contribution Change',
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
    frequency: "monthly",
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

export const defaultEightCards = [
  {
    title: 'Registrations',
    graph: false,
    numGraph: true,
    listCard: false,
    graphType: 'Comp',
    data: ['Registrations'],
    rightBorder: true,
    bottomBorder: true,
    index: 1
  },
  {
    title: 'Enrollments',
    graph: true,
    numGraph: false,
    listCard: false,
    graphType: 'Line',
    data: ['Enrollments', 'Suspicious Enrollments'],
    rightBorder: true,
    bottomBorder: true,
    index: 2
  },
  {
    title: 'Unique User Login',
    graph: false,
    numGraph: true,
    listCard: false,
    graphType: 'Comp',
    data: ['Unique User Login'],
    rightBorder: true,
    bottomBorder: true,
    index: 3
  },
  {
    title: 'Contribution Change',
    graph: true,
    numGraph: false,
    listCard: false,
    graphType: 'Line',
    data: ['Contribution Change'],
    rightBorder: false,
    bottomBorder: true,
    index: 4
  },
  {
    title: 'Bounce Rate',
    graph: false,
    numGraph: false,
    listCard: true,
    graphType: 'List',
    data: ['Bounce Rate'],
    rightBorder: true,
    bottomBorder: false,
    index: 5
  },
  {
    title: 'Retirement Income Calc Usage',
    graph: true,
    numGraph: false,
    listCard: false,
    graphType: 'Bar',
    data: ['Retirement Income Calc Usage'],
    rightBorder: true,
    bottomBorder: false,
    index: 6
  },
  {
    title: 'Top Pages',
    graph: false,
    numGraph: false,
    listCard: true,
    graphType: 'List',
    data: ['Top Pages'],
    rightBorder: true,
    bottomBorder: false,
    index: 7
  },
  {
    title: 'Visits by Device Type',
    graph: true,
    numGraph: false,
    listCard: false,
    graphType: 'Pie',
    data: ['Visits by Device Type'],
    rightBorder: false,
    bottomBorder: false,
    index: 8
  },
]
