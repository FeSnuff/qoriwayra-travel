import LayoutWrapper from "@/app/components/LayoutWrapper";

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}