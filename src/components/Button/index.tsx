import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: HTMLButtonElement["type"];
  children: React.ReactNode;
  className?: string;
} & ButtonTypes;

const Button = ({
  children,
  type,
  onClick,
  className,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex gap-1 cursor-pointer justify-center w-full px-4 py-2 text-base font-medium text-white bg-primary border border-transparent rounded-md shadow-sm disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-red-950 focus:ring-red-500 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
