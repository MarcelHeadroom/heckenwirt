import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="kontakt" style={{ padding: "6rem 0", backgroundColor: "var(--color-background)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "1rem",
          }}>
            Kontakt & Anfahrt
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto 1.25rem" }} />
          <p style={{ color: "var(--color-muted-fg)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Reservierungen, Fragen oder einfach nur mal Hallo sagen. Wir freuen uns auf euch!
          </p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "0.75rem" }}>
                <MapPin size={18} color="var(--color-secondary)" /> Adresse
              </h3>
              <p style={{ color: "var(--color-muted-fg)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Heckenwirt<br />
                Bad Mergentheimer Straße 26<br />
                97999 Igersheim<br />
                Deutschland
              </p>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "0.75rem" }}>
                <Phone size={18} color="var(--color-secondary)" /> Kontakt
              </h3>
              <a href="tel:+4979312348" style={{ display: "block", color: "var(--color-muted-fg)", textDecoration: "none", padding: "0.2rem 0", fontSize: "0.95rem", transition: "color 0.2s" }}>
                +49 7931 2348
              </a>
              <a href="mailto:info@heckenwirt-igersheim.de" style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--color-muted-fg)", textDecoration: "none", padding: "0.2rem 0", fontSize: "0.95rem", transition: "color 0.2s" }}>
                <Mail size={15} /> info@heckenwirt-igersheim.de
              </a>
            </div>

            <div>
              <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "0.75rem" }}>
                <Clock size={18} color="var(--color-secondary)" /> Öffnungszeiten
              </h3>
              <table style={{ width: "100%", fontSize: "0.9rem", color: "var(--color-muted-fg)", borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ padding: "0.35rem 0" }}>Montag</td>
                    <td style={{ padding: "0.35rem 0", textAlign: "right", fontWeight: 600, color: "var(--color-foreground)" }}>Ruhetag</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "0.35rem 0" }}>Di – Fr</td>
                    <td style={{ padding: "0.35rem 0", textAlign: "right" }}>16:00 – 23:00 Uhr</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid var(--color-border)" }}>
                    <td style={{ padding: "0.5rem 0 0.35rem" }}>Sa, So & Feiertage</td>
                    <td style={{ padding: "0.5rem 0 0.35rem", textAlign: "right" }}>11:00 – 23:00 Uhr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: "var(--color-card)",
            border: "1px solid var(--color-border)",
            padding: "2.5rem",
          }}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "1.5rem" }}>
              Tisch reservieren
            </h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-foreground)" }}>Name</label>
                  <input type="text" placeholder="Dein Name" style={inputStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-foreground)" }}>Telefon</label>
                  <input type="tel" placeholder="Für Rückfragen" style={inputStyle} />
                </div>
              </div>
              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-foreground)" }}>Datum</label>
                  <input type="date" style={inputStyle} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-foreground)" }}>Personen</label>
                  <input type="number" min="1" placeholder="Anzahl" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-foreground)" }}>Nachricht (optional)</label>
                <textarea placeholder="Besondere Wünsche?" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  backgroundColor: "var(--color-secondary)",
                  color: "white",
                  border: "none",
                  padding: "0.9rem",
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.2s",
                }}
              >
                Anfrage senden
              </button>
              <p style={{ fontSize: "0.75rem", color: "var(--color-muted-fg)", textAlign: "center" }}>
                Dies ist eine unverbindliche Anfrage. Wir bestätigen die Reservierung telefonisch.
              </p>
            </form>
          </div>

          {/* Map */}
          <div style={{ minHeight: 380, overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.294970425717!2d9.813083!3d49.495066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479860b0b8c0e1db%3A0xcafebabe!2sBad%20Mergentheimer%20Str.%2026%2C%2097999%20Igersheim!5e0!3m2!1sen!2sde!4v1680000000000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karte Heckenwirt Igersheim"
            />
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1.4fr 1fr; }
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 400px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 0.85rem",
  border: "1px solid var(--color-border)",
  backgroundColor: "var(--color-background)",
  color: "var(--color-foreground)",
  fontSize: "0.9rem",
  fontFamily: "var(--font-sans)",
  outline: "none",
  boxSizing: "border-box",
};
