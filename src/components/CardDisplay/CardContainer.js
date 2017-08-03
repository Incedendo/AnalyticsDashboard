import React, { Component } from 'react';
import CardDisplay from './CardDisplay';
import '../../assets/scss/_Card.scss';

class CardContainer extends Component {
  state = {
    graphType: '',
    dataType: [],
    frequency: '',
    filter: '',
    modalOpen: false,
    graph: false,
    comp: false,
    list: false,
  }

  handleSubmit = (data, graph) => {
    this.setState({
      dataType: data,
      graphType: graph,
      modalOpen: false,
    })
    switch(graph) {
      case 'Line':
      case 'Bar':
      case 'Pie':
        this.setState({
          graph: true,
          comp: false,
          list: false,
        })
        break;
      case 'Comp': this.setState({
        graph: false,
        comp: true,
        list: false,
      })
        break;
      case 'List': this.setState({
        graph: false,
        comp: false,
        list: true,
      })
      break;
    }
  }

  handleEditClick = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen}
    })
  }

  handleFilter = (id) => {
    this.setState({
      filter: id,
    })
    switch(id) {
      case 'QTD':
        this.setState({
          frequency: 'quarterly'
        })
        break;
      case 'MTD': this.setState({
        frequency: 'annually'
      })
        break;
      case 'YTD': this.setState({
        frequency: 'daily'
      })
        break;
      case 'WTD': this.setState({
        frequency: 'weekly'
      })
        break;
    }
  }

  store = () => {
    let newState = this.state;
    sessionStorage.setItem(this.props.id, JSON.stringify(newState));
  }

  componentWillMount () {
    if(sessionStorage.getItem(this.props.id)) {
      let newState = sessionStorage.getItem(this.props.id);
      this.setState(JSON.parse(newState));
    }
    else {
      var arr = this.props.data.slice();
      this.setState({
        dataType: arr,
        graphType: this.props.graphType,
        filter: 'QTD',
        frequency: 'quarterly'
      })
      if(this.props.graph){
        this.setState({
          graph: true
        })
      }else if(this.props.numGraph){
        this.setState({
          comp: true
        })
      }else{
        this.setState({
          list: true
        })
      }
    }
  }

  render () {
    return (
      <CardDisplay {...this.state}
        dataList={this.props.list}
        rightBorder={this.props.rightBorder}
        bottomBorder={this.props.bottomBorder}
        store={this.store}
        handleSubmit={this.handleSubmit}
        handleEditClick={this.handleEditClick}
        handleFilter={this.handleFilter}
        id={this.props.id}
      />
    )
  }
}

export default CardContainer;
