import { Component } from 'react';
import { Overlay } from 'components';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  // add key Esc for Close
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDwn);
  }
  // remove Esc after Close
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDwn);
  }
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.modalClose('');
    }
  };

  handleKeyDwn = e => {
    if (e.key === 'Escape') {
      this.props.modalClose('');
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <img src={this.props.largeImageURL} alt="name" width="50%" />
      </Overlay>,
      modalRoot
    );
  }
}
