import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const essentials = products.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Minimal. Clean. Timeless.</p>
            <h1>SELECTEDWEAR</h1>
            <p className="lead">
              Klare Streetwear in Grau und Weiß mit starkem Logo-Auftritt.
            </p>
            <div className="button-row">
              <Link href="/shop" className="button button-dark">
                Shop now
              </Link>
              <Link href="/about" className="button button-light">
                About us
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <Image
              src="/images/selectedwear-logo.jpeg"
              alt="Selectedwear Logo"
              width={700}
              height={700}
              className="hero-logo"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <div>
            <p className="eyebrow">Featured design</p>
            <h2>SW SELECTEDWEAR Hoodie Tech Pack</h2>
            <p className="muted">
              Das Hoodie-Design ist direkt eingebaut. Die anderen Produkte zeigen bewusst euer Logo.
            </p>
          </div>

          <div className="design-card">
            <Image
              src="/images/hoodie-techpack.jpeg"
              alt="Hoodie Tech Pack"
              width={768}
              height={768}
              className="design-image"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Collection</p>
              <h2>Our Essentials</h2>
            </div>
            <Link href="/shop" className="text-link">
              Alles ansehen
            </Link>
          </div>

          <div className="product-grid">
            {essentials.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
