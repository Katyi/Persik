import type { Metadata } from 'next';
import { Comic_Neue, Shantell_Sans, Neucha } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';

export const comic = Comic_Neue({
  subsets: ['latin'],
  variable: '--font-comic',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const shantell = Shantell_Sans({
  subsets: ['cyrillic'],
  variable: '--font-shantell',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const neucha = Neucha({
  subsets: ['cyrillic'],
  variable: '--font-neucha',
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cat Persik',
  description: 'My Cat Persik',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${shantell.className} ${neucha.variable} ${comic.variable}`}
        id="first-section"
      >
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
        <p id="second-section"></p>
      </body>
    </html>
  );
}
