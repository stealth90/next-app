import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Helo world</h1>
      <ProductCard />
      <Link href="/users">Users</Link>
    </main>
  );
}
