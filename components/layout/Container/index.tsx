import React from "react";
import clsx from "clsx";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

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
