import React from "react";

const Pagination = ({ total, perPage, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(total / perPage);

  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) pageNumbers.push(i);

  return (
    <div className="pagination">
      {pageNumbers.map((n) => (
        <button
          key={n}
          className={currentPage === n ? "active" : ""}
          onClick={() => setCurrentPage(n)}
        >
          {n}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
