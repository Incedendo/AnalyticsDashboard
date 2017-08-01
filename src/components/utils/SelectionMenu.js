import React, {Component} from 'react';
import '../../assets/scss/_SelectionMenu.scss';
import barIcon from '../../assets/svg/barIcon.svg';
import lineIcon from '../../assets/svg/lineIcon.svg';
import listIcon from '../../assets/svg/listIcon.svg';
import pieIcon from '../../assets/svg/pieIcon.svg';
import compIcon from '../../assets/svg/compIcon.svg';

const dataList = [
  {id:  'Total Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie'] },
  {id:  'Unique Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Return Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Sign Ups', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Sign Ins', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Contribution Change', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Allocation Change', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Suspicious Enrollment', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Registrations', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Unique User Login', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Bounce Rate', type: 'data', restrict: true, graphs: ['List']},
  {id:  'Retirement Income Calc Usage', type: 'data', restrict: false, graphs: ['Line','Bar','Comp', 'Pie']},
  {id:  'Top Pages', type: 'data', restrict: true, graphs: ['List']},
  {id:  'Visits by Device Type', type: 'data', restrict: true, graphs: ['Pie']},]

const graphList = [
      {id: 'Line', src: lineIcon, type: 'graph'},
      {id: 'Pie', src: pieIcon, type: 'graph'},
      {id: 'Bar', src: barIcon, type: 'graph'},
      {id: 'Comp', src: compIcon, type: 'graph'},
      {id: 'List', src: listIcon, type: 'graph'},
    ];


class SelectionMenu extends Component {

  state = {
    activeData: [],
    activeGraph: '',
    displayGraphs: []
  }

  handleCheckedData = (id) => {
    let arr = this.state.activeData.slice();

    if(arr.includes(id)) {
      arr.splice(arr.indexOf(id), 1)
    } else {
      arr.push(id)
    }
    this.setState({
      activeData: arr
    })

    this.validateGraphs();
  }

  handleRestrictedData = (id) => {
    let arr = this.state.activeData.slice();

    if(arr.includes(id)) arr.splice(0);
    else {
      arr.splice(0)
      arr.push(id)
    }
    this.setState({
      activeData: arr
    })
    this.validateGraphs();
  }

  handleCheckedGraph = (id) => {
    this.setState({
      activeGraph: id
    })
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.activeData, this.state.activeGraph);
    this.props.handleCancel();
  }

  validateGraphs = () => {
    let graphs = this.state.displayGraphs.slice();
    let data = this.state.activeData.slice();

    if(data.length === 0) {
      graphs = graphList.slice();
    }

    else if(data.length === 1) {
      const data = this.state.activeData[0];
      const currentData = dataList.filter(({id, graphs}) => {
        return (data === id)
      })
      const currentGraphs = currentData[0].graphs;
      graphs = graphList.filter(({id}) => {
        return currentGraphs.includes(id)
      })
    }

    else {
      const currentData = dataList.filter(({id, graphs}) => {
        return (data.includes(id))
      })
      let currentGraphs = [];
      currentData.map(({graphs}) => {
        currentGraphs.push(graphs)
      })
      let graphs = currentGraphs.shift().filter((v) => {
        return currentGraphs.every((a) => {
          return a.indexOf(v) !== -1;
        });
      });
    }

    this.setState({
      displayGraphs: graphs
    })

    const included = this.state.displayGraphs.filter(({id}) => {
      return id === this.state.activeGraph;
    })

    if(!included.length) {
      this.setState({
        activeGraph: ''
      })
    }

    this.graphForm();
  }

  graphForm = () => {
    return this.state.displayGraphs.map(({id, src}, key) => {
          return (
        		<div className="tile-toggle-item" style={{height:'20vh',width:'20vh'}} onClick={()=>this.handleCheckedGraph(id)}>
        			<input type="radio" id={id} name="selector" checked={this.state.activeGraph.includes(id)}/>
            <label for={id} style={{height:'20vh'}}>
                <div className='selectionCard'>
                  <img src={src} />
          				<span className="name">{id}</span>
                </div>
        			</label>
        		</div>
          )
      })
  }

  dataForm = () => {
    return dataList.map(({id, type, restrict}, key) => {
          return (
        		<div className="tile-toggle-item" onClick={restrict?()=>this.handleRestrictedData(id):()=>this.handleCheckedData(id)}>
        			<input type="checkbox" id={id} name="selector" checked={this.state.activeData.includes(id)}/>
        			<label for={id}>
        				<span className="name">{id}</span>
        			</label>
        		</div>
          )
      })
  }

  componentWillMount = () => {
    this.setState({
      displayGraphs: graphList
    })
  }

  render () {
    return (
      <div className='modalBody'>
        <div className='selectionBox menu_1'>
          SELECT DATA TYPE
          <div className="tile-toggles">
            <div className="tile-toggle-group">
              {this.dataForm()}
            </div>
          </div>
        </div>

        <div className='selectionBox menu_2'>
          SELECT GRAPH TYPE
          <div className="tile-toggles" style={{height:'30vh'}}>
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
