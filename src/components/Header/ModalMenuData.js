import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

export const topMenuOverlay = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
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

export const modalMenuArray = [
  {
    itemClass: "valicBrand",
    content: VALIC,
    type: "img"
  },
  {
    itemClass: "modalView",
    content: "OVERVIEW",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "POPULAR PAGES",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "DEVICES",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "GEOGRAPHIC",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "SETTINGS",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "PLANNED SPONSOR",
    type: "div"
  },
  {
    itemClass: "modalView",
    content: "horizontal-hr",
    type: "hr"
  },
  {
    itemClass: "modalView",
    content: "Log Out",
    type: "div"
  },
];
