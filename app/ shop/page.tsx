import Link from "next/link";

export default function ShopPage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="/">
            <img
              src="/images/selectedwear-logo.jpeg"
              alt="Selectedwear Logo"
              className="brand-logo"
            />
          </a>

          <nav className="main-nav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">Cart</Link>
          </nav>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Shop</p>
          <h1 className="page-title">Alle Produkte</h1>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-media">
                <img
                  src="/images/hoodie-techpack.jpeg"
                  alt="Hoodie"
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3>SW Hoodie Tech Pack</h3>
                <p className="muted">Original Hoodie Design</p>
                <strong>€79</strong>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media">
                <img
                  src="/images/selectedwear-logo.jpeg"
                  alt="Logo Produkt"
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3>SELECTEDWEAR Hoodie</h3>
                <p className="muted">Logo Edition</p>
                <strong>€79</strong>
              </div>
            </div>

            <div className="product-card">
              <div className="product-media">
                <img
                  src="/images/selectedwear-logo.jpeg"
                  alt="Logo Produkt"
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3>SELECTEDWEAR T-Shirt</h3>
                <p className="muted">Logo Edition</p>
                <strong>€39</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
