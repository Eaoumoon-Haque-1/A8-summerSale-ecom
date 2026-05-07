import Footer from "@/components/shared/Footer";
import MainNavbar from "@/components/shared/MainNavbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff7ed] text-slate-900">
      <MainNavbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout