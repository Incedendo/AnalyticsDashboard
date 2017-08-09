import React, {Component} from 'react';
import '../../assets/scss/_SelectionMenu.scss';
import greyCloseButton from '../../assets/svg/greyCloseButton.svg';
import { dataList, graphList } from '../../assets/JSON/CardData';

class SelectionMenu extends Component {

  state = {
    activeData: [],
    activeGraph: '',
    displayGraphs: []
  }


  /*
    Adds clicked to activeData array if unclicked, and removes clicked from array if clicked.
  */

  handleCheckedData = (id) => {
    let arr = this.state.activeData.slice();

    if(arr.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
    } else {
      const filter = dataList.filter((elem) => {
        return (elem.restrict && elem.id === arr[0])
      })
      if(filter.length) arr.splice(0,1)
      arr.push(id)
    }
    this.setState({
      activeData: arr
    },
    ()=>this.validateGraphs())

  }

  /*
    If data type clicked is not compatible with other data types, removes all other data types in activeData array and adds itself.
  */

  handleRestrictedData = (id) => {
    let arr = this.state.activeData.slice();

    if(arr.includes(id)) arr.splice(0);
    else {
      arr.splice(0)
      arr.push(id)
    }
    this.setState({
      activeData: arr
    },
    ()=>this.validateGraphs())
  }

  /*
    Sets clicked graphType as activeGraph string if unclicked.
  */

  handleCheckedGraph = (id) => {
    this.setState({
      activeGraph: id
    })
  }

  /*
    Invoked by click of greyCloseButton, closes the modal and makes no changes to configuration of card.
  */

  handleCancel = () => {
    this.props.handleCancel();
    this.props.handleModal();
  }

  /*
    If both activeData and activeGraph are not empty, invokes the handleSubmit and handleModal methods in Customize and CardContainer, sending the activeData array and activeGraph string.
  */

  handleSubmit = () => {
    if(!this.state.activeGraph || !this.state.activeData.length){
      return;
    }
    this.props.handleSubmit(this.state.activeData, this.state.activeGraph);
    this.props.handleModal();
  }

  /*
    If there are no data types selected, displays all possible graph types.
    If there is one data type selected, display the possible graph types for that data set.
    If there are more than one data types selected, display the graph types they share in common.
  */

  validateGraphs = () => {
    let graphs = [];
    let data = this.state.activeData.slice();
    //Array of clicked data types with their respective information from dataList
    const currentData = dataList.filter(({id, graphs}) => {
      return data.includes(id)
    })
    //Array of compatible graph type arrays
    let currentGraphs = [];
    currentData.map(({graphs}) => {
      currentGraphs.push(graphs)
    })

    if(data.length === 0) {
      graphs = graphList.slice();
    }

    else if(data.length === 1) {
      graphs = graphList.filter(({id}) => {
        return currentGraphs[0].includes(id)
      })
    }

    else {
      //Compares the list of graph types for each data type and returns array of all common graph types
      let correctGraphs = currentGraphs.shift().filter((v) => {
        return currentGraphs.every((a) => {
          return a.indexOf(v) !== -1;
        });
      });
      //If there are more than two data types, cannot include Pie or Comp as graph type
      graphs = graphList.filter((elem) => {
        return correctGraphs.includes(elem.id) && elem.id!=='Pie' && elem.id!=='Comp';
      })
    }

    this.setState({
      displayGraphs: graphs
    })

    const included = graphs.filter(({id}) => {
      return id === this.state.activeGraph;
    })

    //If active graph type is no longer displayed, there will be no active graphs
    if(!included.length || !this.state.activeData) {
      this.setState({
        activeGraph: ''
      })
    }
  }

  /*
    Displays all possible graph types from displayGraphs.
  */

  graphForm = () => {
    //If no compatible graphs between mutiple datasets
    if(!this.state.displayGraphs.length){
      return (<div className='noGraph'>
        You cannot combine these {this.state.activeData.length}.
      </div>)
    }else return this.state.displayGraphs.map(({id, src}, key) => {
          return (
        		<div className="tile-toggle-item" style={{height:'20vh',width:'20vh'}} onClick={()=>this.handleCheckedGraph(id)} key={key}>
        			<input type="radio" id={id} name="selector" checked={this.state.activeGraph.includes(id)}/>
            <label for={id} className="tile-toggle-item-label" style={{height:'20vh'}}>
                <div className='selectionCard'>
                  <img src={src} />
          				<span className="name">{id}</span>
                </div>
        			</label>
        		</div>
          )
      })
  }

  /*
    Displays all possible data types from dataList.
  */

  dataForm = () => {
    return dataList.map(({id, type, restrict}, key) => {
          return (
        		<div className="tile-toggle-item" onClick={restrict?()=>this.handleRestrictedData(id):()=>this.handleCheckedData(id)} key={key}>
        			<input type="checkbox" id={id} name="selector" checked={this.state.activeData.includes(id)}/>
            <label for={id} className="tile-toggle-item-label">
        				<span className="name">{id}</span>
        			</label>
        		</div>
          )
      })
  }

  /*
    Sets activeData and activeGraph to current data types and current graph type of the card selected.
  */
  componentWillMount = () => {
    this.setState({
      displayGraphs: graphList,
    })
  }

  render () {
    return (
      <div className='modalBody'>
        <div className='selectionBox menu_1'>
          <div className='modalHeader'>
            <div className='menuTitle'>Select Data Type</div>
          <img className='selectionClose' src={greyCloseButton}  onClick={this.handleCancel}/>
          </div>
          <div className="tile-toggles">
            <div className="tile-toggle-group">
              {this.dataForm()}
            </div>
          </div>
        </div>

        <div className='selectionBox menu_2'>
          <div className='menuTitle'>Select Graph Type</div>
          <div className="tile-toggles" style={{height:'30vh',zIndex:'201'}}>
            <div className="tile-toggle-group" style={{height:'100%'}}>
              {this.graphForm()}
            </div>
          </div>
        </div>

        <div className='btnCtn'>
          <button type="submit" className="btn" onClick={this.handleSubmit}>SUBMIT</button>
        </div>
      </div>
    )
  }
}

export default SelectionMenu;
