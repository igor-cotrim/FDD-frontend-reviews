"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="w-full p-5 bg-gray-900">
      <div className="flex items-center justify-between px-8 mx-auto max-w-7xl">
        <div className="flex items-center w-6 h-6 bg-secondary"></div>
        <div>
          <Button
            className="px-4 bg-secondary hover:bg-green-700"
            type="button"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            Sair
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
