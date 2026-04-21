export default function Home() {
  const categories = [
    { title: "T-Shirts", text: "Klare Basics für jeden Tag." },
    { title: "Hoodies", text: "Schlichte Oversize-Pieces in neutralen Farben." },
    { title: "Jackets", text: "Reduzierte Outerwear mit cleanem Look." }
  ];

  const products = [
    {
      name: "Essential Tee",
      price: "€39",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      tag: "Unisex"
    },
    {
      name: "Soft Hoodie",
      price: "€79",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
      tag: "Best Seller"
    },
    {
      name: "Clean Jacket",
      price: "€119",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      tag: "New"
    },
    {
      name: "Classic Pants",
      price: "€69",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
      tag: "Selected"
    }
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f3f3f3",
        color: "#111",
        minHeight: "100vh"
      }}
    >
      <section
        style={{
          padding: "70px 40px 50px 40px",
          borderBottom: "1px solid #d4d4d4",
          backgroundColor: "#ededed"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "12px",
              color: "#666",
              marginBottom: "16px"
            }}
          >
            Minimal. Clean. Timeless.
          </p>
          <h1
            style={{
              fontSize: "56px",
              margin: "0 0 20px 0",
              lineHeight: 1.1
            }}
          >
            SELECTED WEAR
          </h1>
          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              lineHeight: 1.6,
              color: "#444",
              marginBottom: "30px"
            }}
          >
            Ein schlichter Online-Store für moderne Basics in Grau, Weiß und ruhigen Neutrals.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button
              style={{
                backgroundColor: "#111",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              Shop now
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#111",
                border: "1px solid #999",
                padding: "14px 24px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              Explore collection
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 40px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
        >
          {categories.map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "#fafafa",
                border: "1px solid #ddd",
                borderRadius: "20px",
                padding: "24px"
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "30px 40px 70px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "12px",
              color: "#666",
              marginBottom: "10px"
            }}
          >
            Collection
          </p>
          <h2 style={{ fontSize: "36px", marginTop: 0, marginBottom: "30px" }}>
            Current selected pieces
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px"
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "24px",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "12px"
                    }}
                  >
                    {product.tag}
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "flex-start"
                    }}
                  >
                    <div>
                      <h3 style={{ margin: "0 0 6px 0", fontSize: "20px" }}>{product.name}</h3>
                      <p style={{ margin: 0, color: "#666" }}>Grey / White Edition</p>
                    </div>
                    <strong>{product.price}</strong>
                  </div>

                  <button
                    style={{
                      marginTop: "18px",
                      width: "100%",
                      backgroundColor: "#111",
                      color: "white",
                      border: "none",
                      padding: "13px 18px",
                      borderRadius: "999px",
                      cursor: "pointer",
                      fontSize: "15px"
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#111", color: "white", padding: "70px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "12px",
              color: "#aaa"
            }}
          >
            Newsletter
          </p>
          <h2 style={{ fontSize: "34px", marginBottom: "16px" }}>Stay selected.</h2>
          <p style={{ color: "#ccc", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 24px auto" }}>
            Erfahre als Erste:r von neuen Drops, Bestsellern und ausgewählten Looks.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <input
              type="email"
              placeholder="Your email"
              style={{
                padding: "14px 18px",
                borderRadius: "999px",
                border: "1px solid #555",
                minWidth: "260px",
                backgroundColor: "#222",
                color: "white"
              }}
            />
            <button
              style={{
                backgroundColor: "white",
                color: "#111",
                border: "none",
                padding: "14px 24px",
                borderRadius: "999px",
                cursor: "pointer",
                fontSize: "15px"
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
