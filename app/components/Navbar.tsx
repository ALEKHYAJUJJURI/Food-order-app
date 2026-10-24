
"use client";

import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  query: string;
  setQuery: (value: string) => void;
  itemCount: number;
  onCartClick: () => void;
};

export default function Navbar({
  query,
  setQuery,
  itemCount,
  onCartClick,
}: NavbarProps) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
  <header className="sticky top-0 z-30 border-b border-black/5 bg-orange-50/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

    <a
      href="#home"
      className="flex items-center gap-2 text-2xl font-black tracking-tight"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-lg text-white">
        F
      </span>
      Foodify<span className="text-amber-950">.</span>
    </a>

    
    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
      <a className="text-orange-600 " href="#home">
        Home
      </a>
      <a className="hover:text-orange-600" href="#menu">
        Menu
      </a>
      <a className="hover:text-orange-600" href="#about">
        About
      </a>
      <a className="hover:text-orange-600" href="#contact">
        Contact
      </a>
    </nav>

    <div className="flex items-center gap-2">
      
      <label className="hidden w-56 items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2.5 sm:flex">
        <Search size={16} className="text-gray-500" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search food..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </label>

    
      <button
        onClick={onCartClick}
        aria-label="Open cart"
        className="relative rounded-full p-3 hover:bg-orange-100"
      >
        <ShoppingCart size={21} />

        {itemCount > 0 && (
          <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-xs font-bold text-white">
            {itemCount}
          </span>
        )}
      </button>

      
      <button
        className="rounded-full p-2 hover:bg-orange-800 md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="Toggle menu"
      >
        {mobileMenu ? <X /> : <Menu />}
      </button>
    </div>
  </div>


  {mobileMenu && (
    <nav className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 md:hidden">
      <a href="#home" onClick={() => setMobileMenu(false)}>
        Home
      </a>
      <a href="#menu" onClick={() => setMobileMenu(false)}>
        Menu
      </a>
      <a href="#about" onClick={() => setMobileMenu(false)}>
        About
      </a>
      <a href="#contact" onClick={() => setMobileMenu(false)}>
        Contact
      </a>
    </nav>
  )}
</header>
  );
}
