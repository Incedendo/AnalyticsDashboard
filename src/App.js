import React, { Component } from 'react';
import './assets/scss/include.css';
import Home from './components/Home';
import Modal from 'react-modal';
import menuSvg from './assets/svg/three-line-menu.svg';
import VALIC from './assets/svg/VALICWhiteLogo.svg';

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
        <button onClick={this.toggleModal} className="modalTop">
          <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
          closeModal={this.toggleModal}
          enabledModal={this.state.modalIsOpen}
          style={customStyles}
        >
          <div className="valicBrand">
            <img src={VALIC} />
          </div>
          <div className="linksDiv">
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


            <button className="modalClose" onClick={this.toggleModal}>
              x
            </button>

        </Modal>

        <Home />

      </div>
    )
  }
}

export default App;
