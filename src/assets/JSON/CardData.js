import barIcon from '../../assets/svg/barIcon.svg';
import lineIcon from '../../assets/svg/lineIcon.svg';
import listIcon from '../../assets/svg/listIcon.svg';
import pieIcon from '../../assets/svg/pieIcon.svg';
import compIcon from '../../assets/svg/compIcon.svg';

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

export const dataList = [
  {id:  'Total Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp'] },
  {id:  'Unique Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Sign Ups', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Sign Ins', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Unique User Login', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Registrations', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Enrollments', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Contribution Change', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Retirement Income Calc Usage', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Top Pages', type: 'data', restrict: true, graphs: ['List']},
  {id:  'Visits by Device Type', type: 'data', restrict: true, graphs: ['Pie']},
  {id:  'Bounce Rate', type: 'data', restrict: true, graphs: ['List']}
]

export const graphList = [
      {id: 'Line', src: lineIcon, type: 'graph'},
      {id: 'Pie', src: pieIcon, type: 'graph'},
      {id: 'Bar', src: barIcon, type: 'graph'},
      {id: 'Comp', src: compIcon, type: 'graph'},
      {id: 'List', src: listIcon, type: 'graph'},
    ]

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
    id: 1
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
    id: 2
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
    id: 3
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
    id: 4
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
    id: 5
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
    id: 6
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
    id: 7
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
    id: 8
  },
]
