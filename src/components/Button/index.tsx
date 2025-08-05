import React, { ReactNode } from 'react';

import './styles.css';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`common-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
