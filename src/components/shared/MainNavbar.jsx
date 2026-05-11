"use client";

import Link from "next/link";
import { useState } from "react";
import { Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { PiSunHorizonFill } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  const { data } = authClient.useSession();
  const userData = data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 text-2xl font-black text-orange-600"
        >
          <PiSunHorizonFill className="text-5xl" />
          SunCart
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-orange-600">
            Home
          </Link>

          <Link href="/products" className="text-sm font-semibold text-slate-600 hover:text-orange-600">
            Products
          </Link>

          <Link href="/profile" className="text-sm font-semibold text-slate-600 hover:text-orange-600">
            My Profile
          </Link>
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {userData ? (
            <>
              <Avatar
                size="sm"
                src={userData.image}
                name={userData.name}
                className="border-2 border-orange-200"
              />

              <button
                onClick={handleLogout}
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-5 py-2 text-sm font-bold text-orange-600 hover:bg-orange-50"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-600"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-orange-100 p-2 text-2xl text-orange-600 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-orange-100 bg-white px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              Products
            </Link>

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="font-semibold text-slate-700 hover:text-orange-600"
            >
              My Profile
            </Link>

            <div className="mt-3 border-t border-orange-100 pt-4">
              {userData ? (
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      size="sm"
                      src={userData.image}
                      name={userData.name}
                      className="border-2 border-orange-200"
                    />

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {userData.name}
                      </p>
                      <p className="text-xs text-slate-500">{userData.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-orange-200 px-5 py-2 text-center text-sm font-bold text-orange-600 hover:bg-orange-50"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-orange-500 px-5 py-2 text-center text-sm font-bold text-white hover:bg-orange-600"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}