import Link from "next/link";

export default function CartPage() {
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
          <p className="eyebrow">Cart</p>
          <h1 className="page-title">Warenkorb</h1>
          <div className="empty-cart">
            <p>Dein Warenkorb ist aktuell leer.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
