import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>HOME TEST</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/contact">Contact</Link></p>
      <import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f3f3f3",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          padding: "70px 40px 50px 40px",
          borderBottom: "1px solid #d4d4d4",
          backgroundColor: "#ededed",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                fontSize: "12px",
                color: "#666",
                marginBottom: "16px",
              }}
            >
              Minimal. Clean. Timeless.
            </p>

            <h1
              style={{
                fontSize: "56px",
                margin: "0 0 20px 0",
                lineHeight: 1.1,
              }}
            >
              SELECTEDWEAR
            </h1>

            <p
              style={{
                fontSize: "20px",
                maxWidth: "700px",
                lineHeight: 1.6,
                color: "#444",
                marginBottom: "30px",
              }}
            >
              Klare Streetwear in Grau und Weiß mit starkem Logo-Auftritt.
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
                  fontSize: "15px",
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
                  fontSize: "15px",
                }}
              >
                About us
              </button>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: "24px",
              padding: "30px",
            }}
          >
            <Image
              src="/images/selectedwear-logo.png"
              alt="Selectedwear Logo"
              width={700}
              height={700}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "12px",
              color: "#666",
              marginBottom: "10px",
            }}
          >
            Featured design
          </p>

          <h2 style={{ fontSize: "36px", marginTop: 0, marginBottom: "30px" }}>
            SW SELECTEDWEAR Hoodie Tech Pack
          </h2>

          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <Image
              src="/images/hoodie-techpack.jpeg"
              alt="Hoodie Tech Pack"
              width={768}
              height={768}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
            />
          </div>
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
              marginBottom: "10px",
            }}
          >
            Collection
          </p>

          <h2 style={{ fontSize: "36px", marginTop: 0, marginBottom: "30px" }}>
            Our Essentials
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { name: "SELECTEDWEAR Hoodie", price: "€79" },
              { name: "SELECTEDWEAR T-Shirt", price: "€39" },
              { name: "SELECTEDWEAR Jacket", price: "€119" },
            ].map((product) => (
              <div
                key={product.name}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ececec",
                    padding: "30px",
                    minHeight: "280px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/images/selectedwear-logo.png"
                    alt={product.name}
                    width={500}
                    height={500}
                    style={{ width: "70%", height: "auto" }}
                  />
                </div>

                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <h3 style={{ margin: "0 0 6px 0", fontSize: "20px" }}>
                        {product.name}
                      </h3>
                      <p style={{ margin: 0, color: "#666" }}>
                        Clean logo edition
                      </p>
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
                      fontSize: "15px",
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
    </main>
  );
}p><Link href="/shop">Shop</Link></p>
    </main>
  );
}
