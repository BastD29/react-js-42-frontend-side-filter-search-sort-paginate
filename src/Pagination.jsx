import React from "react";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <button style={{ cursor: "pointer" }}>
        {/* prettier-ignore */}
        <a onClick={() => currentPage > 1 && paginate(currentPage - 1)}>Previous</a>
      </button>
      {pageNumbers.map((number) => (
        <button key={number} style={{ cursor: "pointer" }}>
          <a onClick={() => paginate(number)}>{number}</a>
        </button>
      ))}
      <button style={{ cursor: "pointer" }}>
        {/* prettier-ignore */}
        <a onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}>Next</a>
      </button>
    </div>
  );
}
