import HeroSection from "@/components/home/HeroSection";
import PopularProduct from "@/components/home/PopularProduct";
import SummerCareTips from "@/components/home/SummerCareTips";
import TopBrands from "@/components/home/TopBrands";

export default function HomePage() {
  return (
    <div className="bg-[#fff7ed] text-slate-900">
      <HeroSection />
      <PopularProduct />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}