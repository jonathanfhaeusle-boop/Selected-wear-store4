import Link from "next/link";

export default function AboutPage() {
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
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="page-title">Über SELECTEDWEAR</h1>
            <p className="copy">
              SELECTEDWEAR steht für schlichte Streetwear mit klarer visueller Identität.
            </p>
            <p className="copy">
              Der Fokus liegt auf Logo, klaren Schnitten und einem ruhigen grau-weißen Look.
            </p>
          </div>

          <div className="logo-panel">
            <img
              src="/images/selectedwear-logo.jpeg"
              alt="Selectedwear Logo"
              className="about-logo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
