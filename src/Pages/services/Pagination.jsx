import React from 'react';

const Pagination = ({setCurrentPage,currentPage,totalPages}) => {
      const goPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
    // pagination buttons logic for small devices (compact)
  const paginationItems = () => {
    const items = [];

    if (totalPages <= 3) {
      // If total pages are 3 or less, show all pages
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
        // Show first 3 pages, last page, and current page with ellipsis
      if (currentPage <= 3) {
        items.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        items.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        items.push(1, '...', currentPage, '...', totalPages);
      }
    }

    return items;
  };
    return (
        <div>
              <div className="flex justify-center mt-8 items-center gap-2">
      <button className="btn" onClick={goPrev} disabled={currentPage === 1}>
        Prev
      </button>

      <div className="btn-group">
        {paginationItems().map((item, idx) =>
          item === "..." ? (
            <span key={idx} className="btn cursor-default select-none">
              ...
            </span>
          ) : (
            <button
              key={idx}
              className={`btn ${currentPage === item ? "btn-active bg-primary" : ""}`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        className="btn"
        onClick={goNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
        </div>
    );
};

export default Pagination;