"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { products } from "../../data/products";

type CartItem = {
  id: number;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const syncCart = () => {
      const raw = localStorage.getItem("selectedwear-cart");
      setItems(raw ? JSON.parse(raw) : []);
    };

    syncCart();
    window.addEventListener("cart-updated", syncCart);
    return () => window.removeEventListener("cart-updated", syncCart);
  }, []);

  const cartProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return null;
        return { ...product, quantity: item.quantity };
      })
      .filter(Boolean) as Array<(typeof products)[number] & { quantity: number }>;
  }, [items]);

  const total = cartProducts.reduce((sum, item) => {
    const price = Number(item.price.replace("€", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Cart</p>
        <h1 className="page-title">Warenkorb</h1>

        {cartProducts.length === 0 ? (
          <div className="empty-cart">
            <p>Dein Warenkorb ist aktuell leer.</p>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-list">
              {cartProducts.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-thumb">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="product-image"
                    />
                  </div>

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <p>Menge: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Zusammenfassung</h2>
              <div className="summary-line">
                <span>Gesamt</span>
                <strong>€{total}</strong>
              </div>
              <button className="button button-dark full-width">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
