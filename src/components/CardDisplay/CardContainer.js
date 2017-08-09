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

  /*
    Invoked by SelectionMenu, takes in data type and graph type selected, and sets it into state. Depending on graph type, gives boolean value to respective states.
  */

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

  /*
    Notifies the localStorage that the modal is nolonger open
  */

  handleEditClick = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen}
    })
  }

  /*
    Depending on filter id(invoked by FreqFilter), set state frequency to appropriate keyword.
  */

  handleFilter = (id) => {
    let newState = {filter: id, frequency: ''}
    switch(id) {
      case 'QTD':
          newState.frequency = 'quarterly'
        break;
      case 'MTD':
        newState.frequency = 'monthly'
        break;
      case 'YTD':
        newState.frequency = 'annually'
        break;
    }
    this.setState(newState);
  }

  /*
    Store a copy of state object into session/localStorage using the index(id) of the card
  */

  store = () => {
    let newState = this.state;
    sessionStorage.setItem(this.props.id, JSON.stringify(newState));
  }

  /*
    If session/localStorage has been set, setState to the object stored.
    Else, setState to the default items
  */

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
      newState.filter = 'MTD';
      newState.frequency = 'monthly';

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
