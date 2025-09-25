import React from 'react';
import classNames from 'classnames';

export const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const base = 'px-4 py-2 rounded font-semibold transition-all duration-200';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-white',
  };

  return (
    <button className={classNames(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};