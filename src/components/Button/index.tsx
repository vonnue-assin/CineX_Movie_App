import React, { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

import './styles.css';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
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
  const buttonClasses = `common-button ${variant}-button ${className}`;

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
