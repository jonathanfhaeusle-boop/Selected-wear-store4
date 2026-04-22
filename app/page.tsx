import Link from "next/link";

export default function HomePage() {
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
            <img
              src="/images/selectedwear-logo.jpeg"
              alt="Selectedwear Logo"
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
            <img
              src="/images/hoodie-techpack.jpeg"
              alt="Hoodie Tech Pack"
              className="design-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
