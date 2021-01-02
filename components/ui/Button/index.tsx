import React, { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode[] | ReactNode | string;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        `border border-gray-500 rounded-lg 
        hover:bg-gray-200 
        hover:border-black
        dark:hover:bg-gray-900 
        dark:hover:border-white 
        transition-colors max-h-full`,
        props.className
      )}
    >
      <div className="flex items-center py-2 px-4 fill-current">{children}</div>
    </button>
  );
}
