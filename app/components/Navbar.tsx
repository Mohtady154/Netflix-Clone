"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname, useRouter } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Trending", href: "/home/trending" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (openSearch) inputRef.current?.focus();
  }, [openSearch]);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/home/search?q=${encodeURIComponent(q)}`);
    setQuery("");
    setOpenSearch(false);
  }

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-white font-semibold underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-4">
        <form onSubmit={submitSearch} className="flex items-center">
          {openSearch && (
            <>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => inputRef.current?.select()} 
                onBlur={() => setOpenSearch(false)} 
                placeholder="Search movies, TV shows..."
                className="bg-black/60 text-gray-100 placeholder-gray-400 px-3 py-1 rounded-sm mr-2 w-48 sm:w-64 focus:outline-none"
              />
            </>
          )}

          <button
            type="button"
            onClick={() => setOpenSearch((v) => !v)}
            aria-label="Search"
            className="flex items-center"
          >
            <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
          </button>
        </form>

        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
