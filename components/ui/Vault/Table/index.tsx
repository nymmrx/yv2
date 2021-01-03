import React, { useMemo } from "react";

import { observer } from "mobx-react-lite";
import { useSpring, animated } from "react-spring";

import { Vault } from "@state/vaults";
import { formatPercentage } from "@utils/format";
import { useSortBy, useTable, Row } from "react-table";

import Header from "./HeaderCell";
import VaultCell from "./VaultCell";
import FormatCell from "./FormatCell";
import ButtonCell from "./ButtonCell";

export interface VaultsTableProps {
  vaults: Vault[];
}

const VaultsTable = observer(({ vaults }: VaultsTableProps) => {
  const columns = useMemo(
    () => [
      {
        id: "Vault",
        accessor: (vault: Vault) => vault,
        Header,
        Cell: VaultCell,
        sortType: (a: Row, b: Row, column: string) => {
          const aval = a.values[column].displayName;
          const bval = b.values[column].displayName;
          return aval.localeCompare(bval);
        },
      },
      {
        id: "ROI",
        accessor: (vault: Vault) => vault.apy.oneMonthSample,
        Header,
        Cell: FormatCell(formatPercentage),
      },
      {
        id: "Buttons",
        accessor: (vault: Vault) => vault,
        Header: "",
        Cell: ButtonCell,
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

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 750 },
  });

  return (
    <table {...getTableProps()} className="w-full table-auto">
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
            <animated.tr
              key={key}
              style={animation}
              {...props}
              className="border border-gray-600"
            >
              {row.cells.map((cell) => {
                const { key, ...props } = cell.getCellProps();
                return (
                  <td key={key} {...props}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </animated.tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default VaultsTable;
