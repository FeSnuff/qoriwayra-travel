"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/base/navbar/navbar";
import Footer from "@/app/components/base/footer/footer";
import Social from "@/app/components/base/social/social";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = params.locale as 'es' | 'en';

  return (
    <>
      <Navbar locale={locale} />
      {children}
      <Social></Social>
      <Footer locale={locale}></Footer>
    </>
  );
}