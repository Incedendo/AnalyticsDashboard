import React, { Component } from 'react';
import '../../assets/scss/include.css';
import Modal from 'react-modal';
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';
import { NavLink } from 'react-router-dom';

const topMenuOverlay = {
    overlay : {
      position          : 'fixed',
      top               : "20%",
      left              : "20%",
      right             : "20%",
      bottom            : "20%",
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

class CardModal extends Component {

  state = {
    modalIsOpen: true,
  }

  toggleModal = () => {
    const { modalIsOpen } = this.state
    const toggledModal = !modalIsOpen
    this.setState({
      modalIsOpen: toggledModal
    });
  }

  render(){
    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          closeModal={this.toggleModal}
          enabledModal={this.state.modalIsOpen}
          contentLabel="Example Modal"
          style={topMenuOverlay}
        >
          <div className="taskbar">
            <NavLink to="/" className="navlink" onClick={this.toggleModal}>Close</NavLink>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CardModal;
