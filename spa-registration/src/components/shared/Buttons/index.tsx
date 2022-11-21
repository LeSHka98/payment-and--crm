import React from 'react';

type ButtonProps = {
  children: React.ReactElement | React.ReactNode,
  className?: string;
};

const Button = ({ className, children }: ButtonProps) => (
  <button className={className}>
    {children}
  </button>
);

export default Button;
