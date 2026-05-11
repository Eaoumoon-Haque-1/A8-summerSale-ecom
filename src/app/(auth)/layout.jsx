import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";


export default function AuthLayout({ children }) {
  return (
    <>
      <AuthNavbar />
      {children}
      <Footer />
    </>
  );
}