import React, { Component } from 'react';
import '../../assets/scss/include.css';
import Modal from 'react-modal';
import {topMenuOverlay, modalMenuArray} from './ModalMenuData';

const ModalMenu = ({ modalIsOpen, toggleModal, enabledModal}) => {

  const renderMunuItem = (type, content) => {
    if(type === "src")
      return <img src={content} alt="" />
    if(type === "div")
      return <a href="">{content}</a>
    if(type === "hr" )
      return <hr className={content}></hr>
  }

  const renderMenuList = () => (
    modalMenuArray.map(({itemClass, type, content, index}, key) =>(
      <div className={itemClass} key={key}>
        {renderMunuItem(type, content)}
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
