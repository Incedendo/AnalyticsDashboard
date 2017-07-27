import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ModalComponent extends Component {
  state = {
    modalIsOpen: true
  }

	afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  render() {
    if(this.props.enabledModal){
      return (
  				<Modal
  					isOpen={this.state.modalIsOpen}
  					contentLabel="Example Modal"
  				>
  					<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
  					<div>I am a modal</div>
            <button onClick={this.props.closeModal}>Close</button>
  				</Modal>
      );
    }else{
      return <div></div>;
    }
  }
}

export default ModalComponent;
