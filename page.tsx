const products = [
  {
    name: "Essential Tee",
    price: "€39",
    tag: "Unisex",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Soft Hoodie",
    price: "€79",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Clean Jacket",
    price: "€119",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Classic Pants",
    price: "€69",
    tag: "Selected",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <div>
            <p className="eyebrow">Store</p>
            <h1 className="brand">SELECTED WEAR</h1>
          </div>
          <nav className="menu">
            <a href="#home">Home</a>
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Minimal. Clean. Timeless.</p>
            <h2>Selected pieces for everyday wear.</h2>
            <p className="lead">
              Schlichte Essentials in einem klaren grau-weißen Look. Reduziert im
              Design, stark in der Wirkung.
            </p>
            <div className="button-row">
              <a className="btn btn-dark" href="#collection">
                Shop now
              </a>
              <a className="btn btn-light" href="#about">
                View collection
              </a>
            </div>
          </div>
          <div>
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="Selected Wear Hero"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container feature-grid">
          <div className="card">
            <h3>Neutral Design</h3>
            <p>Reduzierte Farben. Ein ruhiger Auftritt.</p>
          </div>
          <div className="card">
            <h3>Unisex Focus</h3>
            <p>Schnitte für beide Geschlechter gedacht.</p>
          </div>
          <div className="card">
            <h3>Everyday Essential</h3>
            <p>Teile, die sich einfach kombinieren lassen.</p>
          </div>
        </div>
      </section>

      <section id="collection" className="collection">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Collection</p>
              <h3>Current selected pieces</h3>
            </div>
            <a href="#">View all</a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className="badge">{product.tag}</span>
                </div>
                <div className="product-content">
                  <div className="product-topline">
                    <div>
                      <h4>{product.name}</h4>
                      <p>Grey / White Edition</p>
                    </div>
                    <strong>{product.price}</strong>
                  </div>
                  <button className="btn btn-dark full">Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">About</p>
            <h3>Less noise. More style.</h3>
            <p className="body-text">
              Selected Wear steht für eine einfache Garderobe mit klaren Linien,
              ruhigen Farben und tragbaren Schnitten. Die Website ist bewusst
              schlicht gehalten, damit die Marke ruhig, modern und hochwertig
              wirkt.
            </p>
            <p className="body-text">
              Das Design verzichtet auf visuelle Überladung und setzt stattdessen
              auf Weißraum, sanfte Grautöne und eine klare Nutzerführung.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-box light">
              <span>01</span>
              <p>Klare Produktpräsentation ohne unnötige Ablenkung.</p>
            </div>
            <div className="info-box dark">
              <span>02</span>
              <p>Ruhige Markenwirkung durch reduzierte Gestaltung.</p>
            </div>
            <div className="info-box mid">
              <span>03</span>
              <p>Fokus auf Essentials statt übergroßer Kollektionen.</p>
            </div>
            <div className="info-box white">
              <span>04</span>
              <p>Modernes Shop-Layout für einen cleanen ersten Eindruck.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container center-box">
          <p className="eyebrow light-text">Newsletter</p>
          <h3>Stay selected.</h3>
          <p className="newsletter-text">
            Erfahre als Erste:r von neuen Drops, Bestsellern und ausgewählten
            Looks.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button className="btn btn-light">Subscribe</button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow">Selected Wear</p>
            <h4>Minimal store experience.</h4>
            <p className="footer-text">
              Ein cleaner Online-Store in Grau und Weiß – modern, ruhig und direkt
              auf die Produkte ausgerichtet.
            </p>
          </div>
          <div>
            <h5>Shop</h5>
            <ul>
              <li><a href="#collection">New In</a></li>
              <li><a href="#collection">Best Seller</a></li>
              <li><a href="#collection">Unisex</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>hello@selectedwear.com</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
