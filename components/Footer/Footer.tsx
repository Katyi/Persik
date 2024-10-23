'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { navbarLinks } from '@/lib/constants';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Photos', href: '/album' },
];

export default function Footer() {
  const currentPath = usePathname();

  return (
    <footer
      className={`w-screen bg-[#f5f3f1] ${
        currentPath === '/about' && 'absolute bottom-0'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1199 200"
        fill="none"
      >
        <path
          d="M1198.7 0.58252C587.548 187.543 145.103 153.004 0.275391 112.365V424.825H1198.7V153.764V0.58252Z"
          fill="#faf8f6"
        />
      </svg>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-4 lg:gap-0 h-[200px] w-[100%] bg-[#faf8f6]">
        <p className="font-[300] px-4 lg:px-0 text-center">
          Copyright © 2030, Persik ­­­­­­Cat. All rights reserved.
        </p>
        <ul className="flex space-x-6 justify-center">
          {navbarLinks.map((link) => (
            <Link
              key={link.url}
              className={`${
                link.url === currentPath && 'hidden'
              } text-[700] text-zinc-500 text-[20px] md:text-[24px] hover:text-zinc-800`}
              href={link.url}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <p className="text-[14px] sm:text-[16px] font-[400] text-[#ff8562]">
          alex.frontender@gmail.com
        </p>
      </div>
    </footer>
  );
}
