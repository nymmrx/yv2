import clsx from "clsx";
import React, { ReactNode } from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode[] | ReactNode | string;
}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      className={clsx("container m-auto py-4 px-4 sm:px-0", props.className)}
    >
      {children}
    </div>
  );
}
