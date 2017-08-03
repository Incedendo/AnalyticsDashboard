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
    let newState = {
      dataType: data,
      graphType: graph,
      modalOpen: false,
      graph: false,
      comp: false,
      list: false,
    }
    switch(graph) {
      case 'Line':
      case 'Bar':
      case 'Pie':
        newState.graph = true;
        break;
      case 'Comp':
        newState.comp = true;
        break;
      case 'List':
        newState.list = true;
        break;
    }
    this.setState(newState)
  }

  handleEditClick = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen}
    })
  }

  handleFilter = (id) => {
    let newState = {filter: id, frequency: ''}
    switch(id) {
      case 'QTD':
          newState.frequency = 'quarterly'
        break;
      case 'MTD':
        newState.frequency = 'annually'
        break;
      case 'YTD':
        newState.frequency = 'daily'
        break;
      case 'WTD':
        newState.frequency = 'weekly'
        break;
    }
    this.setState(newState);
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
      let arr = this.props.data.slice();
      let newState = this.state;

      newState.dataType = arr;
      newState.graphType = this.props.graphType;
      newState.filter = 'QTD';
      newState.frequency = 'quarterly';
      
      if(this.props.graph){
        newState.graph = true;
      }else if(this.props.numGraph){
          newState.comp = true;
      }else{
          newState.list = true;
      }
      this.setState(newState);
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
