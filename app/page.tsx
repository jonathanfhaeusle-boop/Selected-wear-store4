import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>HOME TEST</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/contact">Contact</Link></p>
      <p><Link href="/shop">Shop</Link></p>
    </main>
  );
}
