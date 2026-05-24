export function About() {
  return (
    <section id="ueber-uns" style={{ padding: "6rem 0", backgroundColor: "var(--color-background)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="about-grid">
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <div style={{ width: 28, height: 1, backgroundColor: "var(--color-secondary)" }} />
              <span style={{ textTransform: "uppercase", letterSpacing: "0.25em", fontSize: "0.7rem", fontWeight: 600, color: "var(--color-muted-fg)" }}>
                Unsere Geschichte
              </span>
            </div>

            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-primary)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}>
              Ein Ort, an dem die Zeit etwas langsamer vergeht.
            </h2>

            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-foreground)", opacity: 0.72, marginBottom: "1rem" }}>
              Der Heckenwirt ist mehr als nur ein Gasthof — er ist ein Stück Igersheimer Tradition. Direkt am malerischen Taubertal-Radweg gelegen, laden wir Radfahrer, Wanderer und Einheimische ein, unter unseren alten Kastanienbäumen Platz zu nehmen.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-foreground)", opacity: 0.72, marginBottom: "2.5rem" }}>
              Gastfreundschaft steht bei uns an erster Stelle. Ob beim frisch gezapften Maßkrug, deftigen Grillspezialitäten oder beim Sonnenuntergang über dem Taubertal — hier findet jeder seinen Stammplatz.
            </p>

            <div style={{ display: "flex", gap: 0, paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)" }}>
              <div style={{ paddingRight: "2.5rem" }}>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>1985</span>
                <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-muted-fg)", marginTop: "0.25rem", display: "block" }}>Gegründet</span>
              </div>
              <div style={{ paddingLeft: "2.5rem", borderLeft: "1px solid var(--color-border)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>100%</span>
                <span style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--color-muted-fg)", marginTop: "0.25rem", display: "block" }}>Regional</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
              alt="Ein kühles Bier im Heckenwirt"
              style={{ width: "100%", height: "auto", objectFit: "cover", boxShadow: "20px 20px 0 rgba(200,134,10,0.1)" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .about-grid { flex-direction: row; align-items: center; gap: 5rem; }
        }
      `}</style>
    </section>
  );
}
