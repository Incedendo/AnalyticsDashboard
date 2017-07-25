import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { slide as Menu } from 'react-burger-menu';

class App extends Component {
  render () {
    return (
      <div id="outer-container" >
          <Menu right
            className={ "my-menu" }
            bodyClassName={ "body-my-class" }
            burgerButtonClassName={ "burger-button" }
            overlayClassName={ "bg-overlay" }
          >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>

        <main id="page-wrap" className="zero-padding">
          <Home />
        </main>

      </div>
    )
  }
}

export default App;
