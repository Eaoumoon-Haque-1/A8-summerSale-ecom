import { SiAdidas, SiNike, SiPuma } from "react-icons/si";

const brands = [
  {
    name: "Nike",
    text: "Sportswear, footwear, and summer essentials.",
    icon: SiNike,
    color: "#111111",
  },
  {
    name: "Adidas",
    text: "Summer outfits, sandals, and activewear.",
    icon: SiAdidas,
    color: "#111111",
  },
  {
    name: "Puma",
    text: "Casual wear, shoes, and active summer styles.",
    icon: SiPuma,
    color: "#111111",
  },
];

const TopBrands = () => {
  return (
    <section className="bg-[#fff7ed] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Top Brands
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => {
            const Icon = brand.icon;

            return (
              <div
                key={brand.name}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-4xl">
                  <Icon style={{ color: brand.color }} />
                </div>

                <h2 className="text-lg font-bold text-slate-950">
                  {brand.name}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {brand.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;