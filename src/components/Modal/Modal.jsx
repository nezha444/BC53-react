import { Component } from 'react';

export class Modal extends Component {
  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose('');
    }
  };
  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          background: 'rgba(0, 0, 0, 0.6)',
        }}
        onClick={this.handleOverlayClick}
      >
        <img src={this.props.largeImageURL} alt="name" width="50%" />
      </div>
    );
  }
}
