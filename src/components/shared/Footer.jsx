import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { PiSunHorizonFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 shadow-2xl backdrop-blur">
        <div className="grid gap-10 text-center md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <Link href="/" className="text-4xl font-black text-orange-400 flex items-center gap-1 ">
               <PiSunHorizonFill className="text-5xl"/> SunCart
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
              A modern summer essentials store for sunglasses, skincare,
              outfits, beach accessories, and seasonal deals.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-orange-500 hover:text-white"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-orange-500 hover:text-white"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-orange-500 hover:text-white"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white">Contact</h3>

            <div className="mt-5 flex flex-col items-center gap-4 text-sm text-slate-300">
              <p className="flex items-center justify-center gap-3">
                <MdEmail className="text-xl text-orange-400" />
                support@suncart.com
              </p>

              <p className="flex items-center justify-center gap-3">
                <MdLocalPhone className="text-xl text-orange-400" />
                +8801234-567890
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col items-center gap-3 text-sm text-slate-300">
              <Link href="/" className="transition hover:text-orange-400">
                Home
              </Link>

              <Link href="/products" className="transition hover:text-orange-400">
                Products
              </Link>

              <Link
                href="/my-profile"
                className="transition hover:text-orange-400"
              >
                My Profile
              </Link>

              <Link
                href="/privacy-policy"
                className="transition hover:text-orange-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

     <div className="mx-auto mt-6 flex w-full max-w-[1500px] items-center justify-center text-center text-sm text-slate-400">
  <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>
</div>
    </footer>
  );
}