import React, { ReactNode } from 'react';

import './styles.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',
  children,
}) => {
  const buttonClasses = `base-button ${variant}-button ${className}`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
