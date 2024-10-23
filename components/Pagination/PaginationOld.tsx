// 'use client';
import classNames from 'classnames';

const Pagination = (props: PaginationProps) => {
  const pagesCount = Math.ceil(props.items / props.pageSize); // 100/10
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  // console.log(pages)

  return (
    <div className="w-[100%] mt-4">
      {/* bg-gray-200 rounded-3xl */}
      <ul className="flex justify-center items-center gap-2">
        {pages.map((page) => (
          <li
            key={page}
            className={classNames({
              'text-[16px] font-[700] px-2 py-2 text-zinc-400': true,
              'bg-gray-200 rounded-3xl': page === props.currentPage,
              //  "hidden": page !== 1 && page !== 10 && page !== props.currentPage,
              //  "block": page === 1 || ,
              //  "": page === 10,
            })}
          >
            <button className="button" onClick={() => props.onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
