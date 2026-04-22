import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>SELECTEDWEAR</h3>
          <p className="muted">Minimal. Clean. Timeless.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/cart">Cart</Link></li>
          </ul>
        </div>

        <div>
          <h4>Info</h4>
          <p className="muted">
            Hier kannst du später Impressum, Versand und Datenschutz ergänzen.
          </p>
        </div>
      </div>
    </footer>
  );
}
