import React, {Component} from 'react';
import ReactModal from 'react-modal';
import SelectionMenu from '../utils/SelectionMenu';
import '../../assets/scss/_SelectionMenu.scss';

class Customize extends Component {

  state = {
    showModal: true
  }

  handleModal = () => {
    this.setState((prevState) => {
      return {showModal: !prevState.showModal}
    })
  }

  render () {

    const { showModal } = this.state;
    const {id, handleSubmit, handleCancel, dataType, graphType} = this.props;

    return (
      <div>
        <ReactModal isOpen={showModal} onRequestClose={this.handleModal} contentLabel='Example'
          className='modalYur'
          overlayClassName='overlaySelection' style={{background:'#F4F4F4'}}>
          <SelectionMenu id={id} handleSubmit={handleSubmit}
          handleModal={this.handleModal}
          handleCancel={handleCancel}
          dataType={dataType}
          graphType={graphType}/>
        </ReactModal>
      </div>
    )
  }
}

export default Customize;

// in render, props should probably be destructured so you don't have to keep
// using this.props.variableName
// remove unneeded console.logs
