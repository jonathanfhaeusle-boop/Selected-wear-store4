export default function ContactPage() {
  return (
    <main className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Kontakt</h1>
          <p className="copy">Hier kannst du später deine echten Kontaktdaten eintragen.</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea placeholder="Nachricht" rows={6} />
          <button type="button" className="button button-dark">Nachricht senden</button>
        </form>
      </div>
    </main>
  );
}
