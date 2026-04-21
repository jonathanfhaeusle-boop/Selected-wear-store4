"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const syncCart = () => {
      const raw = localStorage.getItem("selectedwear-cart");
      const items = raw ? JSON.parse(raw) : [];
      const total = items.reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0
      );
      setCount(total);
    };

    syncCart();
    window.addEventListener("cart-updated", syncCart);
    return () => window.removeEventListener("cart-updated", syncCart);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/">
          <Image
            src="/images/selectedwear-logo.png"
            alt="Selectedwear Logo"
            width={140}
            height={70}
            className="brand-logo"
          />
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart">Cart ({count})</Link>
        </nav>
      </div>
    </header>
  );
}
