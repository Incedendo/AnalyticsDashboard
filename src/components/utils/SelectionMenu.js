import React, {Component} from 'react';
import '../../assets/scss/_SelectionMenu.scss';
import barIcon from '../../assets/svg/barIcon.svg';
import lineIcon from '../../assets/svg/lineIcon.svg';
import listIcon from '../../assets/svg/listIcon.svg';
import pieIcon from '../../assets/svg/pieIcon.svg';
import compIcon from '../../assets/svg/compIcon.svg';
import closeButton from '../../assets/svg/closeButton.svg';

const dataList = [
  {id:  'Total Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp'] },
  {id:  'Unique Visits', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Sign Ups', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Sign Ins', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Unique User Login', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Registrations', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Enrollments', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Suspicious Enrollments', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Contribution Change', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Retirement Income Calc Usage', type: 'data', restrict: false, graphs: ['Line','Bar','Comp']},
  {id:  'Top Pages', type: 'data', restrict: true, graphs: ['List']},
  {id:  'Visits by Device Type', type: 'data', restrict: true, graphs: ['Pie']},
  {id:  'Bounce Rate', type: 'data', restrict: true, graphs: ['List']},]

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
    },
    ()=>this.validateGraphs())

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
    },
    ()=>this.validateGraphs())
  }

  handleCheckedGraph = (id) => {
    this.setState({
      activeGraph: id
    })
  }

  handleSubmit = () => {
    if(!this.state.activeGraph || !this.state.activeData.length){
      return;
    }
    this.props.handleSubmit(this.state.activeData, this.state.activeGraph);
    this.props.handleCancel();
  }

  validateGraphs = () => {
    let graphs = [];
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

      let correctGraphs = currentGraphs.shift().filter((v) => {
        return currentGraphs.every((a) => {
          return a.indexOf(v) !== -1;
        });
      });

      graphs = graphList.filter((elem) => {
        return correctGraphs.includes(elem.id) && elem.id!='Pie' && elem.id!='Comp';
      })
    }

    this.setState({
      displayGraphs: graphs
    })

    const included = graphs.filter(({id}) => {
      return id === this.state.activeGraph;
    })

    if(!included.length) {
      this.setState({
        activeGraph: ''
      })
    }
  }

  graphForm = () => {
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
          <img src={closeButton} style={{float:'right'}}/>
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
