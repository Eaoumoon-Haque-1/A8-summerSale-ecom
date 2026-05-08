import {
  IoSunnyOutline,
  IoWaterOutline,
  IoShirtOutline,
  IoTimeOutline,
} from "react-icons/io5";

const tips = [
  {
    title: "Use Sunscreen",
    text: "Apply sunscreen before going outside.",
    icon: IoSunnyOutline,
  },
  {
    title: "Stay Hydrated",
    text: "Drink enough water during hot weather.",
    icon: IoWaterOutline,
  },
  {
    title: "Wear Light Clothing",
    text: "Choose breathable outfits for summer.",
    icon: IoShirtOutline,
  },
  {
    title: "Avoid Peak Heat",
    text: "Limit outdoor activity during strong sunlight.",
    icon: IoTimeOutline,
  },
];

const SummerCareTips = () => {
  return (
    <section className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Summer Care Tips
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => {
            const Icon = tip.icon;

            return (
              <div
                key={tip.title}
                className="rounded-3xl border border-orange-100 bg-[#fff7ed] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                  <Icon />
                </div>

                <h2 className="text-lg font-bold text-slate-950">
                  {tip.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {tip.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;