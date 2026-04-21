import { ProductCard } from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ShopPage() {
  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">Shop</p>
        <h1 className="page-title">Alle Produkte</h1>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
