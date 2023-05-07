import { useEffect, useState } from "react";

const Pagination = ({ listItems, setItemsInPage, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageButtonToShow = 3;

  const IndexOfLastItem = currentPage * itemPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemPerPage;

  const visableItems = listItems.slice(IndexOfFirstItem, IndexOfLastItem);

  useEffect(() => {
    setItemsInPage(visableItems);
  }, [currentPage]);

  let pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(listItems.length / itemPerPage); i++)
    pagesNumbers.push(i);

  const firstPage = pagesNumbers[0];
  const lastPage = pagesNumbers[pagesNumbers.length - 1];
  const spreter = <span className="spreter">...</span>;

  let centerPagesNumbers = pagesNumbers.filter(
    (page) =>
      page !== firstPage &&
      page !== lastPage &&
      page < currentPage + pageButtonToShow &&
      page > currentPage - pageButtonToShow
  );

  return (
    pagesNumbers.length > 1 && (
      <div className="pagination">
        {currentPage !== firstPage && (
          <button
            onClick={() =>
              currentPage > firstPage && setCurrentPage((prevPage) => --prevPage)
            }
          >
            Prev
          </button>
        )}

        <button
          onClick={() => setCurrentPage(firstPage)}
          className={currentPage === firstPage ? "active" : undefined}
        >
          {firstPage}
        </button>

        {currentPage - pageButtonToShow > firstPage && spreter}

        {centerPagesNumbers.map((page, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : undefined}
          >
            {page}
          </button>
        ))}

        {currentPage + pageButtonToShow < lastPage && spreter}

        {lastPage > firstPage && (
          <button
            onClick={() => setCurrentPage(lastPage)}
            className={currentPage === lastPage ? "active" : undefined}
          >
            {lastPage}
          </button>
        )}

        {currentPage !== lastPage && (
          <button
            onClick={() =>
              currentPage < lastPage && setCurrentPage((prevPage) => ++prevPage)
            }
          >
            Next
          </button>
        )}
      </div>
    )
  );
};

export default Pagination;
