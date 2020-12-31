import React, { ReactNode } from "react";

export interface PageProps {
  children: ReactNode[] | ReactNode | string;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="dark:bg-gray-800 dark:text-white min-h-screen">
      {children}
    </div>
  );
}
