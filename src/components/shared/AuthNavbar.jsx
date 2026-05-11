"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { PiSunHorizonFill } from "react-icons/pi";

export default function AuthNavbar() {
  return (
    <header className="border-b border-orange-100 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-black text-orange-600 flex items-center gap-1 ">
          <PiSunHorizonFill className="text-5xl"/> SunCart
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm font-semibold text-slate-600 hover:text-orange-600 sm:inline"
          >
            Back to Home
          </Link>

          <Link
            href="/products"
            className="rounded-full bg-orange-500 p-2.5 font-bold text-white"
          >
            Explore Products
          </Link>
        </div>
      </nav>
    </header>
  );
}