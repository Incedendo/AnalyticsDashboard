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
        <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleModal} contentLabel='Example'
          className='modalYur'
          overlayClassName='overlaySelection' style={{background:'#F4F4F4'}}>
          <SelectionMenu id={this.props.id} handleSubmit={this.props.handleSubmit}
          handleModal={this.handleModal}
          handleCancel={this.props.handleCancel}
          dataType={this.props.dataType}
          graphType={this.props.graphType}/>
        </ReactModal>
      </div>
    )
  }
}

export default Customize;
