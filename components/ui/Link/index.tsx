import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

export interface ButtonProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode[] | ReactNode | string;
  active?: boolean;
}

export default function Button({
  children,
  active,
  href,
  ...props
}: ButtonProps) {
  return (
    <Link href={href} {...props}>
      <a
        {...props}
        className={clsx(
          "text-lg transition hover:text-white",
          active ? "text-white underline" : "text-gray-500",
          props.className
        )}
      >
        {children}
      </a>
    </Link>
  );
}
