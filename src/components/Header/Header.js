import React, {Component} from 'react'
import PropTypes from 'prop-types';
import BurgerMenuComponent from './BurgerMenu/BurgerMenuComponent';
import Modal from 'react-modal';
import '../../assets/scss/_Header.scss'
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

class Header extends Component {
  render(){
    return(
      <div>
        <div className="header">
          <div className="inLine VALICLogo">
            <img src={VALIC} />
          </div>
          <div className="analytics inLine">ANALYTICS</div>
          <div className="share inLine">SHARE</div>
        </div>
      </div>
    );
  }
}

export default Header;
