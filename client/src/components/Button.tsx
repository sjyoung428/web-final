"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
