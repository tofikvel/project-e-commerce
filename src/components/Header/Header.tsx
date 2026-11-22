"use client";
import Link from "next/link";
import CartCounter from "../CartCounter";
import { useFilters } from "@/components/FilterProvider";

const Header = () => {
  const { resetFilters } = useFilters();

  return (
    <header className="bg-[#003566] text-white">
      <nav className="flex justify-between items-center mx-auto w-full max-w-6xl min-h-16 px-4 py-3 sm-px-6">
        <div>
          <Link href="/" onClick={resetFilters}>
            Home
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="flex items-center">
            Cart&nbsp;{<CartCounter />}
          </Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
