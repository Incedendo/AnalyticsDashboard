import React, {Component} from 'react';
import ReactModal from 'react-modal';
import SelectionMenu from '../utils/SelectionMenu';
import '../../assets/scss/_SelectionMenu.scss';

class Customize extends Component {

  state = {
    showModal: true
  }

  handleCancel = () => {
    this.setState((prevState) => {
      return {showModal: !prevState.showModal}
    })
  }

  render () {
    return (
      <div>
        <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleCancel} contentLabel='Example'>
          <SelectionMenu id={this.props.id} handleSubmit={this.props.handleSubmit}
          handleCancel={this.handleCancel}/>
        </ReactModal>
      </div>
    )
  }
}

export default Customize;
