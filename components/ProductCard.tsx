"use client";

import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
  subtitle: string;
};

export function ProductCard({ product }: { product: Product }) {
  const addToCart = () => {
    const raw = localStorage.getItem("selectedwear-cart");
    const items = raw ? JSON.parse(raw) : [];
    const existing = items.find((item: { id: number; quantity: number }) => item.id === product.id);

    let next;
    if (existing) {
      next = items.map((item: { id: number; quantity: number }) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      next = [...items, { id: product.id, quantity: 1 }];
    }

    localStorage.setItem("selectedwear-cart", JSON.stringify(next));
    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <div className="product-card">
      <div className="product-media">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={800}
          className="product-image"
        />
        <span className="tag">{product.tag}</span>
      </div>

      <div className="product-content">
        <div className="product-top">
          <div>
            <h3>{product.name}</h3>
            <p className="muted">{product.subtitle}</p>
          </div>
          <strong>{product.price}</strong>
        </div>

        <button className="button button-dark full-width" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
  );
}
