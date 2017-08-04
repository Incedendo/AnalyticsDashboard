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
    console.log(this.props)
    return (
      <div>
        <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleModal} contentLabel='Example' overlayClassName='overlaySelection' style={{backgroundColor:'#888888'}}>
          <SelectionMenu id={this.props.id} handleSubmit={this.props.handleSubmit}
          handleModal={this.handleModal}
          handleCancel={this.props.handleCancel}/>
        </ReactModal>
      </div>
    )
  }
}

export default Customize;
