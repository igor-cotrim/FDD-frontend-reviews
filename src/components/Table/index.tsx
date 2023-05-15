"use client";

/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import { Column, useTable } from "react-table";

type TableProps = {
  columns: Array<Column<any>>;
  data: Array<any>;
  actions?: ((row: any) => any)[];
};

const Table = ({ columns, data, actions }: TableProps) => {
  const memoData = useMemo(() => data, [data]);
  const memoColumns = useMemo(() => columns, [columns]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: memoColumns,
      data: memoData,
    });

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className={`w-full overflow-hidden border border-collapse ${
          memoData.length ? "rounded-lg" : "rounded-t-lg"
        }  table-auto`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              className="bg-white border-b border-primary"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="px-8 py-4 text-center border-b text-primary border-primary"
                >
                  {column.render("Header")}
                </th>
              ))}
              {actions && (
                <th className="w-1/4 px-4 py-2 text-center border-b border-primary"></th>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="px-8 py-4 text-center text-black border-r border-primary"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                {actions && (
                  <td className="flex items-center justify-center gap-4 px-4 py-4">
                    {actions.map((action) => action(row))}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
