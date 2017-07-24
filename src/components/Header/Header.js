import React from 'react'
import PropTypes from 'prop-types';
import BurgerMenuComponent from './BurgerMenu/BurgerMenuComponent';

import { slide as Menu } from 'react-burger-menu'


import './Header.css'

const Header = () => {
    return(
      <div className="header">
        <div className="inLine">VALIC</div>

        <div className="analytics inLine">ANALYTICS</div>

        

        <div className="share inLine">SHARE</div>

        <div className="burgerMenu">
          <Menu right >
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
        </div>


      </div>
    );
}

export default Header;
