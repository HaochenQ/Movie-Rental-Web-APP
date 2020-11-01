import React from "react";
import TableHeadeer from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TableHeadeer columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
