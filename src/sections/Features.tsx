import { Beer, UtensilsCrossed, Flame, Tv, Users, Bike } from "lucide-react";

const features = [
  { icon: <Beer size={22} strokeWidth={1.5} />, title: "Frisch gezapftes Bier", desc: "Regionale Bierspezialitäten, perfekt temperiert aus dem Fass." },
  { icon: <UtensilsCrossed size={22} strokeWidth={1.5} />, title: "Regionale Küche", desc: "Frische Zutaten aus dem Taubertal, liebevoll und traditionell zubereitet." },
  { icon: <Flame size={22} strokeWidth={1.5} />, title: "Grill & Grillgerichte", desc: "Saftige Steaks, Würste und vegetarische Alternativen frisch vom Rost." },
  { icon: <Tv size={22} strokeWidth={1.5} />, title: "Sportsbar & Live-Fußball", desc: "Alle wichtigen Spiele live auf großen Screens in geselliger Runde." },
  { icon: <Users size={22} strokeWidth={1.5} />, title: "Familienfreundlich", desc: "Viel Platz für die Kleinen, Kindermenüs und eine lockere Atmosphäre." },
  { icon: <Bike size={22} strokeWidth={1.5} />, title: "Radfahrer willkommen", desc: "Direkt am Taubertal-Radweg — mit E-Bike Ladestationen und Flickzeug." },
];

export function Features() {
  return (
    <section style={{ padding: "6rem 0", backgroundColor: "var(--color-card)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="features-header">
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            lineHeight: 1.25,
            maxWidth: 360,
          }}>
            Was den Heckenwirt besonders macht
          </h2>
          <div style={{ width: 48, height: 1, backgroundColor: "var(--color-secondary)", alignSelf: "flex-end", marginBottom: 8 }} />
        </div>

        <div className="features-grid" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "1.1rem",
                padding: "1.75rem",
                borderBottom: "1px solid var(--color-border)",
                borderRight: "1px solid var(--color-border)",
              }}
              className={`feature-item feature-item-${idx}`}
            >
              <div style={{ flexShrink: 0, color: "var(--color-secondary)", marginTop: "0.1rem" }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--color-foreground)", marginBottom: "0.4rem" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-muted-fg)", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .features-header { flex-direction: row; align-items: flex-end; justify-content: space-between; }
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .feature-item-1, .feature-item-3, .feature-item-5 { border-right: none !important; }
        }
        @media (min-width: 1024px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); }
          .feature-item-1, .feature-item-3, .feature-item-5 { border-right: 1px solid var(--color-border) !important; }
          .feature-item-2, .feature-item-5 { border-right: none !important; }
        }
        .feature-item:last-child, .feature-item:nth-last-child(2):nth-child(odd) {
          border-bottom-color: transparent;
        }
      `}</style>
    </section>
  );
}
