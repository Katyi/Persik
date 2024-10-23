import AlbumList from '@/components/AlbumList/AlbumList';
import Link from 'next/link';

const title = "Persik's photos";

const Album = () => {
  return (
    <main className="min-h-[calc(100vh-84px)] bg-[#F5F3F1]">
      <p className="text-[#000000] text-[50px] font-[900] pt-5 md:pt-10 px-5 md:px-10 neucha">{`${title}`}</p>
      <p className="text-[#000000] text-[20px] font-[300] px-5 md:px-10">
        A small portion of the photos with Persik
      </p>

      <div className="w-[100%] flex justify-end items-baseline px-5 md:px-10 pb-5">
        <Link
          href="#second-section"
          className="-rotate-90 hidden sm:block w-[16px]"
        >
          <span className="text-[#ff8562] font-[700] text-nowrap p-0 m-0 neucha">
            SCROLL DOWN
          </span>
        </Link>
      </div>

      <AlbumList />

      <div className="w-[100%] h-[50px] px-3 md:px-3 justify-start items-start hidden sm:flex mt-9">
        <Link href="#first-section" className="-rotate-90">
          <span className="text-[#ff8562] font-[700] neucha">SCROLL UP</span>
        </Link>
      </div>
    </main>
  );
};

export default Album;
