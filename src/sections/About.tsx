export function About() {
  return (
    <section id="ueber-uns" style={{ padding: "6rem 0", backgroundColor: "var(--color-background)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="about-grid">
          <div style={{ flex: 1 }}>
            <div style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              backgroundColor: "var(--color-muted)",
              color: "var(--color-muted-fg)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.7rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}>
              Unsere Geschichte
            </div>

            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-primary)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Ein Ort, an dem die Zeit etwas langsamer vergeht.
            </h2>

            <div style={{ width: 80, height: 4, backgroundColor: "var(--color-secondary)", marginBottom: "1.5rem" }} />

            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-foreground)", opacity: 0.85, marginBottom: "1rem" }}>
              Der Heckenwirt ist mehr als nur ein Gasthof. Er ist ein Stück Igersheimer Tradition. Direkt am malerischen Taubertal-Radweg gelegen, laden wir Radfahrer, Wanderer und Einheimische gleichermaßen ein, unter unseren Schatten spendenden Kastanienbäumen Platz zu nehmen.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-foreground)", opacity: 0.85, marginBottom: "2rem" }}>
              Bei uns steht Gastfreundschaft an erster Stelle. Ob bei einem frisch gezapften Maßkrug, deftigen Grillspezialitäten oder einfach nur, um den Sonnenuntergang über dem lieblichen Taubertal zu genießen – hier findet jeder seinen Stammplatz.
            </p>

            <div style={{
              display: "flex",
              gap: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border)",
            }}>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>1985</span>
                <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted-fg)" }}>Gegründet</span>
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--color-primary)" }}>100%</span>
                <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted-fg)" }}>Regional</span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
              alt="Ein kühles Bier im Heckenwirt"
              style={{ width: "100%", height: "auto", objectFit: "cover", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .about-grid {
            flex-direction: row;
            align-items: center;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
