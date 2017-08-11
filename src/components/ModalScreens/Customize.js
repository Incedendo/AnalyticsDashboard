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
    return (
      <div>
        <ReactModal isOpen={showModal} onRequestClose={this.handleModal} contentLabel='Example'
          className='modalYur'
          overlayClassName='overlaySelection' style={{background:'#F4F4F4'}}>
          <SelectionMenu
          handleModal={this.handleModal}
          {...this.props}/>
        </ReactModal>
      </div>
    )
  }
}

export default Customize;
