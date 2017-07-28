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
        listCard: false,
        graphType: 'compare',
        data: ['Registrations'],
        rightBorder: true,
        bottomBorder: true,
        index: 1
      },
      {
        title: 'Enrollments',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'line',
        data: ['Enrollments', 'Suspicious Enrollments'],
        rightBorder: true,
        bottomBorder: true,
        index: 2
      },
      {
        title: 'Unique User Login',
        graph: false,
        numGraph: true,
        listCard: false,
        graphType: 'compare',
        data: ['Unique User Login'],
        rightBorder: true,
        bottomBorder: true,
        index: 3
      },
      {
        title: 'Contribution Changes',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'line',
        data: ['Contribution Changes'],
        rightBorder: false,
        bottomBorder: true,
        index: 4
      },
      {
        title: 'Top Active Pages',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'list',
        data: ['Top Active Pages'],
        rightBorder: true,
        bottomBorder: false,
        index: 5
      },
      {
        title: 'Retirement Income Calc Usage',
        graph: true,
        numGraph: false,
        listCard: false,
        graphType: 'bar',
        data: ['Retirement Income Calc Usage'],
        rightBorder: true,
        bottomBorder: false,
        index: 6
      },
      {
        title: 'Top Pages',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'list',
        data: ['Top Pages'],
        rightBorder: true,
        bottomBorder: false,
        index: 7
      },
      {
        title: 'Visits by Device Type',
        graph: false,
        numGraph: false,
        listCard: true,
        graphType: 'pie',
        data: ['Visits by Device Type'],
        rightBorder: false,
        bottomBorder: false,
        index: 8
      },
    ]
  }

  renderCards = () => {
    return this.state.cards.map(({...rest, index}) => {
      return (
          <Card {...rest} key={index} list={this.props.list}/>
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
