import React from "react";
import TableHeadeer from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeadeer
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
