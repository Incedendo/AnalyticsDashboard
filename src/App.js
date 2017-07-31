import React, { Component } from 'react';
import './assets/scss/include.css';
import Home from './components/Home';
import Modal from 'react-modal';
import menuSvg from './assets/svg/three-line-menu.svg';
import VALIC from './assets/svg/VALICWhiteLogo.svg';
import closeButton from './assets/svg/closeButton.svg';

const customStyles = {

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
      padding                    : '20px'
    }

};

class App extends Component {
  state = {
    enabledModal: false,
    modalIsOpen: false,
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
    });
  }

  render () {
    return (
      <div style={{background: "#022753"}}>
        {!this.state.modalIsOpen && <button onClick={this.toggleModal} className="modalTop">
          <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>}

          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Example Modal"
            closeModal={this.toggleModal}
            enabledModal={this.state.modalIsOpen}
            style={customStyles}
          >

            <div className="linksDiv ">
              <div className="valicBrand">
                <img src={VALIC} />
              </div>
              <div className="modalView">
                <a href="#">OVERVIEW</a>
              </div>
              <div className="modalView">
                <a href="#">POPULAR PAGES</a>
              </div>
              <div className="modalView">
                <a href="#">DEVICES</a>
              </div>
              <div className="modalView">
                <a href="#">GEOGRAPHIC</a>
              </div>
              <div className="modalView">
                <a href="#">SETTINGS</a>
              </div>
              <div className="modalView">
                <hr className="horizontal-hr"></hr>
              </div>
              <div className="modalView">
                <a href="#">Log Out</a>
              </div>
            </div>

            <div className="taskbar">
              <button className="btn-close-task" onClick={this.toggleModal}>
                {/* <img className="x" src={closeButton} /> */}
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


        <Home />

      </div>
    )
  }
}

export default App;
