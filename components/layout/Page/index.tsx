import React from "react";
import clsx from "clsx";

export type PageProps = React.HTMLAttributes<HTMLDivElement>;

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
