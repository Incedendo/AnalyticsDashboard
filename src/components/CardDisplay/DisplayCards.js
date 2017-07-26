import React, { Component } from 'react';
import {Card} from './Card';
import '../../assets/scss/_Card.scss';


export class DisplayCards extends Component {

  state = {
    cards: [{title: 'Registrations', graph: false, numGraph: true, graphType: 'compare', data: ['Registrations']},
            {title: 'Enrollments', graph: true, numGraph: false, graphType: 'line', data: ['Enrollments', 'Suspicious Enrollments']},
            {title: 'Unique User Login', graph: false, numGraph: true, graphType: 'compare', data: ['Unique User Login']},
            {title: 'Contribution Changes', graph: true, numGraph: false, graphType: 'line', data: ['Contribution Changes']},
            {title: 'Top Active Pages', graph: false, numGraph: false, graphType: 'list', data: ['Top Active Pages']},
            {title: 'Retirement Income Calc Usage', graph: true, numGraph: false, graphType: 'bar', data: ['Retirement Income Calc Usage']},
            {title: 'Top Pages', graph: false, numGraph: false, graphType: 'list', data: ['Top Pages']},
            {title: 'Visits by Device Type', graph: false, numGraph: false, graphType: 'bar', data: ['Visits by Device Type']},]
  }

  renderCards = () => {
    return this.state.cards.map(({...rest}) => {
      return (
            <Card {...rest} list={this.props.list}/>
      );

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
      <div className="row display">
        {this.renderCards()}
      </div>
    )
  }
}
