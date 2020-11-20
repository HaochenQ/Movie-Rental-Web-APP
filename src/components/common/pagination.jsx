import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { ItemCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = ItemCount / pageSize;
  const pages = _.range(1, pageCount + 1);
  if (Math.ceil(pageCount) === 1) {
    return null;
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  ItemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
