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
    const { id, handleSubmit, handleCancel, dataType, graphType } = this.props;

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

// we can spread the props into SelectionMenu let's talk about this
