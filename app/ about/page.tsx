import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="section">
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
          <Image
            src="/images/selectedwear-logo.png"
            alt="Selectedwear Logo"
            width={700}
            height={700}
            className="about-logo"
          />
        </div>
      </div>
    </main>
  );
}
