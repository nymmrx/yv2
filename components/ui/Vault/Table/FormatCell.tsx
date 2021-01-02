import React from "react";

export default function FormatCell(formatter: (val: any) => string) {
  return function FormattedCell({ value }: Wrap<any>) {
    return (
      <div className="py-2 px-2">
        <p className="font-mono">{formatter(value)}</p>
      </div>
    );
  };
}
