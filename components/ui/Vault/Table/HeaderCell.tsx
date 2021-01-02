import React from "react";
import { HeaderGroup } from "react-table";

export interface HeaderProps {
  column: HeaderGroup;
}

export default function Header({ column }: HeaderProps) {
  return (
    <div className="py-2 px-2 text-left flex space-x-2 select-none cursor-pointer">
      <p className="font-light font-mono">{column.id}</p>
      <span>{column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}</span>
    </div>
  );
}
