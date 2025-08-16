import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  children: ReactNode;
  to?: string;
  as?: 'button' | 'link';
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',
  children,
  to,
  as = 'button',
}) => {
  const buttonClasses = `button ${variant}-button ${className}`;

  if (as === 'link' && to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

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
