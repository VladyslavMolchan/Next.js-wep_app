"use client"

import Link from 'next/link';
import { useState } from 'react';

interface LinkItem {
  id: number;
  title: string;
  url: string;
}

const links: LinkItem[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

export default function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-100px flex justify-between items-center pt-6">
      <Link href="/" passHref>
         MyApp
      </Link>
      <div className="hidden sm:flex items-center gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url} passHref>
            {link.title}
          </Link>
        ))}
        <button
          className="p-1 border-0 text-white cursor-pointer rounded-md bg-green-500"
          onClick={() => {
            console.log('Logout');
          }}
        >
          Logout
        </button>
      </div>
      <div className="sm:hidden flex items-center">
        <button className="p-1 text-white cursor-pointer" onClick={toggleMobileMenu}>
        <span className="text-2xl"> 
            {isMobileMenuOpen ? '✕' : '☰'} {/* Hamburger icon */}
          </span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed  top-0 right-0 sm:hidden bg-black w-40 h-full flex flex-col items-center gap-5 p-5">
          <button
            className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ✕ {/* Close (cross) icon */}
          </button>
          {links.map((link) => (
            <Link key={link.id} href={link.url} passHref>
              {link.title}
            </Link>
          ))}
          <button
            className="p-1 border-0 text-white cursor-pointer rounded-md bg-green-500"
            onClick={() => {
              console.log('Logout');
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
