import React, {Component} from 'react'
import '../../assets/scss/include.scss'
import VALIC from '../../assets/svg/VALICWhiteLogo.svg';

const Header = () => (
  <div className='headerDiv'>
    <div className="header">
      {/* <div className="inLine VALICLogo">
        <img src={VALIC} alt=""/>
      </div> */}
      <div className="analytics inLine">ANALYTICS</div>
      <div className="share inLine">SHARE</div>
    </div>
  </div>
)

export default Header;
