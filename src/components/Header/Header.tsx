"use client";
import Link from "next/link";
import CartCounter from "../CartCounter";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white">
      <nav className="mx-auto w-full max-w-6xl flex justify-between items-center px-6 py-3">
        <div className="flex px-3">
          <Link href="/" className="bg-black px-6 py-3 text-white">
            Home
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/cart" className="flex bg-black px-6 py-3 text-white">
            Cart&nbsp;{<CartCounter />}
          </Link>
          <Link href="/login" className="bg-black px-6 py-3 text-white">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
