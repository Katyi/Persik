import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps1 {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  numberOfPages: number;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  numberOfPages,
}: PaginationProps1) => {
  function nextPage() {
    if (currentPage != numberOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
  }

  return (
    <div className="w-full flex flex-row items-center justify-center">
      <div className="flex flex-row items-center gap-4">
        {/* <span
          className={`${
            currentPage === 1 && 'hidden'
          } cursor-pointer font-semibold hidden sm:block`}
          onClick={() => prevPage()}
        >
          prev
        </span> */}

        <Image
          src="/left.png"
          alt="left"
          width={20}
          height={20}
          className={`${
            currentPage === 1 && 'hidden'
          } cursor-pointer font-semibold`}
          onClick={() => prevPage()}
        />

        <div className="flex flex-row items-center gap-4 cursor-pointer">
          <span
            className={`${
              (currentPage === 1 || currentPage === 2) && 'hidden'
            }`}
            onClick={() => handlePageChange(1)}
          >
            1
          </span>
          <span
            className={`${
              (currentPage === 1 || currentPage === 2 || currentPage === 3) &&
              'hidden'
            }`}
          >
            ...
          </span>
          <span
            className={`${currentPage === 1 && 'hidden'}`}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {currentPage - 1}
          </span>
          <span className="font-bold bg-gray-300 px-2 rounded-2xl">
            {currentPage}
          </span>
          <span
            className={`${currentPage === numberOfPages && 'hidden'}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </span>
          <span
            className={`${
              (currentPage === numberOfPages ||
                currentPage === numberOfPages - 1 ||
                currentPage === numberOfPages - 2) &&
              'hidden'
            }`}
          >
            ...
          </span>
          <span
            className={`${
              (currentPage === numberOfPages ||
                currentPage === numberOfPages - 1) &&
              'hidden'
            }`}
            onClick={() => handlePageChange(numberOfPages)}
          >
            {numberOfPages}
          </span>
        </div>
        {/* <span
          className={`${
            currentPage === numberOfPages && 'hidden'
          } cursor-pointer font-semibold`}
          onClick={() => nextPage()}
        >
          next
        </span> */}

        <Image
          src="/right.png"
          alt="left"
          width={20}
          height={20}
          className={`${
            currentPage === numberOfPages && 'hidden'
          } cursor-pointer font-semibold`}
          onClick={() => nextPage()}
        />
      </div>
    </div>
  );
};

export default Pagination;
