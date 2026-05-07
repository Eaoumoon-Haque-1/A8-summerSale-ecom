import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-white px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-black text-orange-600">SunCart</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-500">
            A modern summer essentials store for sunglasses, skincare, outfits,
            beach accessories, and seasonal deals.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">Contact</h4>
          <p className="mt-3 text-sm text-slate-500">Email: support@suncart.com</p>
          <p className="mt-1 text-sm text-slate-500">Phone: +880 1234-567890</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900">Quick Links</h4>

          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-500">
            <Link href="/products" className="hover:text-orange-600">
              Products
            </Link>
            <Link href="/my-profile" className="hover:text-orange-600">
              My Profile
            </Link>
            <Link href="/privacy-policy" className="hover:text-orange-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-orange-100 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
}