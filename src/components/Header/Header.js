import React, {Component} from 'react'
import '../../assets/scss/_Header.scss'
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

const Header = () => (
  <div>
    <div className="header">
      <div className="inLine VALICLogo">
        <img src={VALIC} alt=""/>
      </div>
      <div className="analytics inLine">ANALYTICS</div>
      <div className="share inLine">SHARE</div>
    </div>
  </div>
)

export default Header;
