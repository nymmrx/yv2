import React, { ReactNode } from "react";

import A from "../../../assets/yearn.svg";

export interface ContainerProps {
  children: ReactNode[] | ReactNode | string;
}

export default function Container({ children }: ContainerProps) {
  return <div className="container m-auto py-4 px-4 sm:px-0">{children}</div>;
}
