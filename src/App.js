import React, { Component } from 'react';
import './assets/scss/include.css';
import Home from './components/Home';
import ModalMenu from './components/Header/ModalMenu';

class App extends Component {
  state = {
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
      <div className="blueBackgroundColor">
        <ModalMenu
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
          enabledModal={this.state.modalIsOpen}
        />
        <Home />
      </div>
    )
  }
}

export default App;
