import { Beer, UtensilsCrossed, Flame, Tv, Users, Bike } from "lucide-react";

const features = [
  {
    icon: <Beer size={36} strokeWidth={1.5} />,
    title: "Frisch gezapftes Bier",
    desc: "Ausgesuchte regionale Bierspezialitäten, perfekt temperiert aus dem Fass.",
  },
  {
    icon: <UtensilsCrossed size={36} strokeWidth={1.5} />,
    title: "Regionale Küche",
    desc: "Frische Zutaten aus dem Taubertal, liebevoll und traditionell zubereitet.",
  },
  {
    icon: <Flame size={36} strokeWidth={1.5} />,
    title: "Grill & Grillgerichte",
    desc: "Saftige Steaks, knusprige Würste und vegetarische Alternativen frisch vom Rost.",
  },
  {
    icon: <Tv size={36} strokeWidth={1.5} />,
    title: "Sportsbar & Live-Fußball",
    desc: "Alle wichtigen Spiele live auf großen Screens in geselliger Runde genießen.",
  },
  {
    icon: <Users size={36} strokeWidth={1.5} />,
    title: "Familienfreundlich",
    desc: "Viel Platz für die Kleinen, spezielle Kindermenüs und eine lockere Atmosphäre.",
  },
  {
    icon: <Bike size={36} strokeWidth={1.5} />,
    title: "Radfahrer willkommen",
    desc: "Direkt am Taubertal-Radweg. Mit Ladestationen für E-Bikes und Flickzeug.",
  },
];

export function Features() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "var(--color-card)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "1rem",
          }}>
            Was den Heckenwirt besonders macht
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto 1.25rem" }} />
          <p style={{ color: "var(--color-muted-fg)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Ehrliche Gastronomie ohne Schnickschnack. Wir konzentrieren uns auf das, was wirklich zählt.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--color-background)",
                padding: "2.5rem 2rem",
                textAlign: "center",
                border: "1px solid var(--color-border)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="feature-card"
            >
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "rgba(42,92,14,0.07)",
                color: "var(--color-secondary)",
                marginBottom: "1.25rem",
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--color-foreground)",
                marginBottom: "0.75rem",
              }}>
                {f.title}
              </h3>
              <p style={{ color: "var(--color-muted-fg)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
}
