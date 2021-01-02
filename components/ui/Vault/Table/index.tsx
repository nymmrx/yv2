import React, { useMemo } from "react";

import { observer } from "mobx-react-lite";

import { Vault } from "@state/vaults";
import { formatPercentage } from "@utils/format";
import { useSortBy, useTable, HeaderGroup, Row } from "react-table";
import { TokenFallbackImage } from "@const/assets";
import { action } from "mobx";

export interface VaultsTableProps {
  vaults: Vault[];
}

const SortableHeader = ({ column }: { column: HeaderGroup }) => {
  return (
    <div className="py-2 px-2 text-left flex space-x-2 select-none cursor-pointer">
      <p className="font-light font-mono">{column.id}</p>
      <span>{column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}</span>
    </div>
  );
};

interface AssetCellProps {
  name: string;
  icon: string;
}

const AssetCell = ({ value: { name, icon } }: { value: AssetCellProps }) => {
  return (
    <div className="py-2 px-2 flex items-center space-x-2">
      {/* <img className="w-8 h-8" src={vault.icon ?? TokenFallbackImage} /> */}
      <img className="w-8 h-8" src={icon ?? TokenFallbackImage} />
      <p>{name}</p>
    </div>
  );
};

const FormatCell = (formatter: (val: any) => string) => {
  return function FormattedCell({ value }: { value: any }) {
    return (
      <div className="py-2 px-2">
        <p className="font-mono">{formatter(value)}</p>
      </div>
    );
  };
};

const VaultsTable = observer(({ vaults }: VaultsTableProps) => {
  const columns = useMemo(
    () => [
      {
        id: "Assets",
        accessor: (vault: Vault) => ({
          name: vault.displayName,
          icon: vault.token.icon,
        }),
        Header: SortableHeader,
        sortType: (a: Row, b: Row, column: string) => {
          const aval = a.values[column].name;
          const bval = b.values[column].name;
          return aval.localeCompare(bval);
        },
        Cell: AssetCell,
      },
      {
        id: "ROI",
        accessor: (vault: Vault) => vault.apy.oneMonthSample,
        Header: SortableHeader,
        Cell: FormatCell(formatPercentage),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: vaults,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()} className="w-full border table-auto">
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key, ...props } = headerGroup.getHeaderGroupProps();
          return (
            <tr key={key} {...props} className="border border-gray-600">
              {headerGroup.headers.map((column) => {
                const { key, ...props } = column.getHeaderProps(
                  column.getSortByToggleProps()
                );
                return (
                  <th key={key} {...props}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...props } = row.getRowProps();
          return (
            <tr key={key} {...props} className="border border-gray-600">
              {row.cells.map((cell) => {
                const { key, ...props } = cell.getCellProps();
                return (
                  <td key={key} {...props}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default VaultsTable;
