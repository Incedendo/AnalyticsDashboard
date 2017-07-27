import React, {Component} from 'react'
import PropTypes from 'prop-types';
import BurgerMenuComponent from './BurgerMenu/BurgerMenuComponent';
import Modal from 'react-modal';
import '../../assets/scss/_Header.scss'
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

class Header extends Component {
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

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div>
        <div className="header">
          <div className="inLine VALICLogo">
            <img src={VALIC} />
          </div>
          <div className="analytics inLine">ANALYTICS</div>
          <div className="share inLine">SHARE</div>
          <div className="modal inLine">
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}

              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

{/* <button onClick={this.toggleModal}>
  {this.state.modalIsOpen ? "Close Modal" : "Open Modal" }
</button>

<Modal
  isOpen={this.state.modalIsOpen}
  contentLabel="Example Modal"
  closeModal={this.toggleModal} enabledModal={this.state.enabledModal}
>
  <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
  <div>I am a modal</div>
  <button onClick={this.props.toggleModal}>Close</button>
</Modal> */}
