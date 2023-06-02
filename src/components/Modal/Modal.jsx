import { Overlay } from 'components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalClose, largeImageURL }) => {
  // add key Esc for Close

  useEffect(() => {
    const handleKeyDwn = e => {
      if (e.key === 'Escape') {
        modalClose('');
      }
    };
    document.addEventListener('keydown', handleKeyDwn);
    return () => {
      document.removeEventListener('keydown', handleKeyDwn);
    };
  }, [modalClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      modalClose('');
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <img src={largeImageURL} alt="name" width="50%" />
    </Overlay>,
    modalRoot
  );
};
