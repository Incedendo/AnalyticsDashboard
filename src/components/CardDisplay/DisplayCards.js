import React, { Component } from 'react';
import CardContainer from './CardContainer';
import '../../assets/scss/include.scss';
import { defaultEightCards } from '../../assets/JSON/CardData';

export default class DisplayCards extends Component {

  componentWillMount = () => {
    var arr = defaultEightCards.slice();
    for(let i = 0; i < this.props.num; i++) {
      arr[i] = Object.assign(arr[i], {id: i})
    }
  }

  render () {
    return (
      <div className="container noMargin bottomCardDiv">
        <div className="row display">
          {defaultEightCards.map((card, index) => (
            <CardContainer {...card} key={index} list={this.props.list}/>
          ))}
        </div>
      </div>
    )
  }
}
