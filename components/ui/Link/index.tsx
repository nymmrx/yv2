import React, { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";

export interface LinkProps
  extends NextLinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode[] | ReactNode | string;
  active?: boolean;
}

export default function Link({ children, active, href, ...props }: LinkProps) {
  return (
    <NextLink href={href}>
      <a
        href={href}
        {...props}
        className={clsx(
          "text-lg transition hover:text-blue-400 dark:hover:text-white",
          active ? "text-blue-400 dark:text-white underline" : "text-gray-500",
          props.className
        )}
      >
        {children}
      </a>
    </NextLink>
  );
}
