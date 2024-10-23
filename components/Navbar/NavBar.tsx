'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { navbarLinks } from '@/lib/constants';
import { Menu } from 'lucide-react';

const NavBar = () => {
  const currentPath = usePathname();
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (e: any) => {
    if (dropdownMenu && ref.current && !ref.current.contains(e.target)) {
      setDropdownMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [dropdownMenu]);

  return (
    <nav className="sticky top-0 bg-[#f5f3f1] flex items-center justify-between border-b px-8 h-[84px] z-10">
      <div className="hidden sm:flex items-center sm:gap-6">
        <Link href="/">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-[60px] rounded-full ring-offset-2 overflow-hidden">
              <Image src="/Pers.jpg" alt={'Avatar'} width={60} height={60} />
            </div>
          </div>
        </Link>
        <Link href="/">
          <p className="neucha sm:text-[30px] md:text-[36px] font-black">
            Мой кот Персик
          </p>
        </Link>
      </div>
      <div className="hidden xs:block sm:hidden">
        <Image src="/pawprint.png" alt="pawprint" width={40} height={40} />
      </div>

      <ul className="hidden sm:flex gap-6">
        {navbarLinks.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={`${
              link.url === currentPath && 'hidden'
            } text-[700] text-zinc-500 text-[20px] md:text-[24px] hover:text-zinc-800`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div ref={ref} className="cursor-pointer sm:hidden">
        <Menu onClick={() => setDropdownMenu(!dropdownMenu)} />
        {dropdownMenu && (
          <div className="w-[180px] absolute top-16 xs:right-5 flex flex-col gap-2 p-3 rounded-lg border bg-white text-base">
            {navbarLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                onClick={() => setDropdownMenu(!dropdownMenu)}
                className={
                  'text-[700] text-zinc-500 text-[16px] xs:text-[20px] hover:text-zinc-800'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
