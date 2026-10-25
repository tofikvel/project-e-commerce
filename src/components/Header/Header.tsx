"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white">
      <nav className="mx-auto w-full max-w-6xl px-6 py-3">
        <Link href="/cart" className="bg-black px-6 py-3 text-white">
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
