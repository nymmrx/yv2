import React, { ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode[] | ReactNode | string;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="border border-gray-500 rounded-xl hover:bg-gray-900 hover:border-white transition-colors max-h-full rainbow"
    >
      <div className="flex items-center py-2 px-4 fill-current">{children}</div>
    </button>
  );
}
