import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-orange-900/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(251,146,60,0.35),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-2">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Summer Sale 50% OFF
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Own the Summer Look
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/80 sm:text-lg">
            Shop sunglasses, skincare, summer outfits, beach gear, and seasonal
            essentials made for sunny days.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-sm font-black text-white shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Shop Now
            </Link>

            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              Create Account
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Sunglasses", "Skincare", "Outfits", "Beach Gear"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-md"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* Floating deal card */}
        <div className="hidden justify-end lg:flex">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
            <div className="mb-5 rounded-[1.5rem] bg-white/10 p-4">
              <p className="text-sm font-bold text-orange-200">
                Today&apos;s Hot Deal
              </p>
              <h2 className="mt-2 text-4xl font-black">Up to 50% OFF</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Limited summer offers on selected fashion, skincare, and travel
                essentials.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">6+</p>
                <p className="mt-1 text-xs text-white/70">Items</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">4.8</p>
                <p className="mt-1 text-xs text-white/70">Rating</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-2xl font-black">24h</p>
                <p className="mt-1 text-xs text-white/70">Deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}