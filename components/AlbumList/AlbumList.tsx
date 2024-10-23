'use client';
import imagesList from '@/data/imagesList';
import Image from 'next/image';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';

const AlbumList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nbPerPage = 10;
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedImagesList = imagesList.slice(
    startIndex,
    startIndex + pageSize
  );

  const numberOfPages = Math.ceil(imagesList.length / nbPerPage);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />

      {/* IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-10 gap-10 justify-items-center">
        {paginatedImagesList.map((img: Img, ind: number) => (
          <div
            key={ind}
            className="flex flex-col items-center bg-white w-[100%] h-fit shadow-md"
          >
            <div className="mt-3 mb-3 text-left text-[14px] font-[700] text-zinc-500 ml-5 w-full">
              {img.date}
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[300px] lg:h-[500px] xl:h-[600px] w-[100%]">
              <Image
                src={require('../../assets/' + img.title + '.jpg')}
                alt="Images"
                quality={100}
                className="h-full object-cover"
              />
            </div>
            <div className="text-left w-full mt-3 mb-3 ml-5 text-[14px] font-[700] text-zinc-500">
              {img.text}
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
};

export default AlbumList;
