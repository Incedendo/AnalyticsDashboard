import React, { Component } from 'react';
import {Card} from './Card';
import '../../assets/scss/_Card.scss';


export class DisplayCards extends Component {

  state = {
    cards: [
      {
        title: 'Registrations',
        graph: false,
        numGraph: true,
        graphType: 'compare',
        data: ['Registrations'],
        rightBorder: true,
        bottomBorder: true,
      },
      {
        title: 'Enrollments',
        graph: true,
        numGraph: false,
        graphType: 'line',
        data: ['Enrollments', 'Suspicious Enrollments'],
        rightBorder: true,
        bottomBorder: true,
      },
      {
        title: 'Unique User Login',
        graph: false,
        numGraph: true,
        graphType: 'compare',
        data: ['Unique User Login'],
        rightBorder: true,
        bottomBorder: true,
      },
      {
        title: 'Contribution Changes',
        graph: true,
        numGraph: false,
        graphType: 'line',
        data: ['Contribution Changes'],
        rightBorder: false,
        bottomBorder: true,
      },
      {
        title: 'Top Active Pages',
        graph: false,
        numGraph: false,
        graphType: 'list',
        data: ['Top Active Pages'],
        rightBorder: true,
        bottomBorder: false,
      },
      {
        title: 'Retirement Income Calc Usage',
        graph: true,
        numGraph: false,
        graphType: 'bar',
        data: ['Retirement Income Calc Usage'],
        rightBorder: true,
        bottomBorder: false,
      },
      {
        title: 'Top Pages',
        graph: false,
        numGraph: false,
        graphType: 'list',
        data: ['Top Pages'],
        rightBorder: true,
        bottomBorder: false,
      },
      {
        title: 'Visits by Device Type',
        graph: false,
        numGraph: false,
        graphType: 'bar',
        data: ['Visits by Device Type'],
        rightBorder: false,
        bottomBorder: false,
      },
    ]
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
