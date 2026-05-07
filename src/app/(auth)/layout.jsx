import AuthNavbar from "@/components/shared/AuthNavbar";


export default function AuthLayout({ children }) {
  return (
    <>
      <AuthNavbar />
      {children}
    </>
  );
}