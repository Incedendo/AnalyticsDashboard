import React, { Component } from 'react';
import '../../assets/scss/include.css';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

const topMenuOverlay = {
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

const modalMenuArray = [
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
    content: "horizontal-hr",
    type: "hr"
  },
  {
    itemClass: "modalView",
    content: "Log Out",
    type: "div"
  },
];


const ModalMenu = ({ modalIsOpen, toggleModal, enabledModal}) => {

  const renderMenuList = () => (
    modalMenuArray.map(({itemClass, type, content, index}) =>(
      <div className={itemClass} key={index}>
        { type === "src" && <img src={content} alt="" />}
        { type === "div" && <a href="">{content}</a>}
        { type === "hr" && <hr className={content}></hr>}
      </div>
    ))
  )

  const renderModalButton = () => (
    <button onClick={toggleModal} className="modalTop">
      <div id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  )

  return(
    <div>
      {!modalIsOpen && renderModalButton()}
      <Modal
        isOpen={modalIsOpen}
        closeModal={toggleModal}
        enabledModal={enabledModal}
        contentLabel="Example Modal"
        style={topMenuOverlay}
      >
        <div className="linksDiv ">
          {renderMenuList()}
        </div>
        <div className="taskbar">
          <button className="btn-close-task" onClick={toggleModal}>
            <svg className="x" width="32px" height="33px" viewBox="0 0 32 33" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="#ffffff" strokeWidth="" fill="none" fillRule="evenodd">
                <g id="Custom-Preset" transform="translate(0.000000, 1.000000)">
                  <g id="Group">
                    <path d="M32,32 L0,0" id="Path"></path>
                    <path d="M0,32 L32,-1.77635684e-15 L0,32 Z" id="Path"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalMenu;
