// app/[locale]/page.tsx
export async function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default function Home() {
  return <h1>¡Bienvenido!</h1>;
}
