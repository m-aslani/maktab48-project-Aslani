import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate , currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  //
  //{number}
  return (
    <nav>
      <ul className="category-page--pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`category-page--pagination--btn ${currentPage === number ? 'category-page--pagination--btn--active' : null}`}
          >
            <span>{number}</span>
          </button>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
