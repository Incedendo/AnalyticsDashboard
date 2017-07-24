import React from 'react'
import PropTypes from 'prop-types';
import BurgerMenuComponent from './BurgerMenu/BurgerMenuComponent';
import './Header.css'
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

const Header = () => {
    return(
        <div className="header">
          <div className="inLine VALICLogo">
            <img src={VALIC} />
          </div>
          <div className="analytics inLine">ANALYTICS</div>
          <div className="share inLine">SHARE</div>
        </div>
    );
}

export default Header;
