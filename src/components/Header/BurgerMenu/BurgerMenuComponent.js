import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './burgerMenu.css';

class MenuWrap extends Component {

  state = {
    hidden: false
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class BurgerMenuComponent extends Component {
  state = {
      currentMenu: 'slide',
      side: 'right'
  }

  getItems() {
    let items;

    switch (this.props.menus.items) {
      case 1:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
        ];
        break;
      case 2:
        items = [
          <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x" /><span>Sidebar</span></h2>,
          <a key="1" href=""><i className="fa fa-fw fa-database" /><span>Data Management</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-map-marker" /><span>Location</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-mortar-board" /><span>Study</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-picture-o" /><span>Collections</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-money" /><span>Credits</span></a>
        ];
        break;
      default:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>OVERVIEW</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>POPOLAR PAGES</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>VIDEO USAGE</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>TRAFFIC SOURCES</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>TECHNOLOGY</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>MOBILE DEVICES</span></a>
        ];
    }

    return items;
  }

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    console.log(this.props.menus.buttonText);
    const items = this.getItems();

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
          {items}
        </Menu>
      </MenuWrap>
    );

  }

  render() {

    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
      </div>
    );
  }
}

export default BurgerMenuComponent;
