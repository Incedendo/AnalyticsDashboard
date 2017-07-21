import React, { Component } from 'react';
import {Card} from './Card';
import './Card.css'


export class DisplayCards extends Component {

  state = {
    cards: [{title: 'Registrations', graph: false, numGraph: true, graphType: 'compare'},
            {title: 'Enrollments', graph: true, numGraph: false, graphType: 'line'},
            {title: 'Unique User Login', graph: false, numGraph: true, graphType: 'compare'},
            {title: 'Contribution Changes', graph: false, numGraph: false, graphType: 'line'},
            {title: 'Top Active Pages', graph: false, numGraph: false, graphType: ''},
            {title: 'Retirement Income Calc Usage', graph: false, numGraph: false, graphType: ''},
            {title: 'Top Pages', graph: false, numGraph: false, graphType: 'list'},
            {title: 'Visits by Device Type', graph: false, numGraph: false, graphType: ''},]
  }

  renderCards = () => {
    return this.state.cards.map(({...rest}) => {
      return <Card {...rest} list={this.props.list}/>
    })
  }

  componentWillMount = () => {
    var arr = this.state.cards.slice();
    for(let i = 0; i < this.props.num; i++) {
      arr[i] = Object.assign(arr[i], {id: i})
    }
    this.setState({
      cards: arr
    })
  }

  render () {
    return (
      <div className='display'>
        {this.renderCards()}
      </div>
    )
  }
}
