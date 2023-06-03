"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full p-5 bg-gray-900">
      <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
        <div className="flex items-center w-6 h-6 bg-secondary"></div>
        <div>
          <Link
            href="/"
            className="text-lg font-bold text-secondary"
            type="button"
          >
            Sair
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
