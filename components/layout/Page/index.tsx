import clsx from "clsx";
import React, { ReactNode } from "react";

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode[] | ReactNode | string;
}

export default function Page({ children, ...props }: PageProps) {
  return (
    <div
      {...props}
      className={clsx(
        "dark:bg-gray-800 dark:text-white min-h-screen",
        props.className
      )}
    >
      {children}
    </div>
  );
}
