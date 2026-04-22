import Link from "next/link";

export default function ContactPage() {
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
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">Kontakt</h1>
            <p className="copy">
              Hier kannst du später deine echten Kontaktdaten eintragen.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea placeholder="Nachricht" rows={6} />
            <button type="button" className="button button-dark">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
