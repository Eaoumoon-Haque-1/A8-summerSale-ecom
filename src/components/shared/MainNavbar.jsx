"use client";

import Link from "next/link";
import { Avatar } from "@heroui/react";

export default function MainNavbar() {
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-orange-600">
          SunCart
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            Products
          </Link>

          <Link
            href="/my-profile"
            className="text-sm font-semibold text-slate-600 transition hover:text-orange-600"
          >
            My Profile
          </Link>
        </div>

        {/* Auth Area */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Avatar
                size="sm"
                src="https://i.pravatar.cc/150?img=12"
                className="border-2 border-orange-300"
              />

              <button
                type="button"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full px-5 py-2 text-sm font-bold text-orange-600 transition hover:bg-orange-50 sm:inline-flex"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-md shadow-orange-100 transition hover:bg-orange-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}