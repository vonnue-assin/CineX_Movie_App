import React, { ReactNode } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/svg/closeIcon.svg';

import './styles.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className={`modal-container ${className || ''}`}>
        <button className="modal-close-icon" onClick={onClose}>
          <CloseIcon />
          &times;
        </button>
        {title && <h2>{title}</h2>}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
