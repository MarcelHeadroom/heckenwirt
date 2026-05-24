import { Calendar, Clock } from "lucide-react";

const events = [
  {
    title: "Saisonstart 2025 & Bieranstich",
    date: "01. Mai 2025",
    time: "Ab 11:00 Uhr",
    desc: "Wir eröffnen die Biergarten-Saison mit dem traditionellen Fassanstich und Live-Blasmusik. Jeder erste Maßkrug zum halben Preis!",
  },
  {
    title: "Public Viewing: DFB Pokal Finale",
    date: "24. Mai 2025",
    time: "20:00 Uhr (Anstoß)",
    desc: "Erlebt das Finale live auf unseren großen Leinwänden. Dazu gibt es spezielle Stadion-Snacks und Getränke-Angebote.",
  },
  {
    title: "Sommerfest & Spanferkel",
    date: "21. Juni 2025",
    time: "Ab 16:00 Uhr",
    desc: "Unser großes Sommerfest mit knusprigem Spanferkel vom Grill, Live-Band am Abend und Kinderprogramm am Nachmittag.",
  },
  {
    title: "Taubertal Radler-Treff",
    date: "Jeden 1. Sonntag",
    time: "10:00 – 14:00 Uhr",
    desc: "Besonderes Frühstücksangebot für alle Radfahrer. E-Bike Ladestationen sind kostenfrei nutzbar.",
  },
];

export function Events() {
  return (
    <section id="events" style={{ padding: "6rem 0", backgroundColor: "var(--color-card)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "1rem",
          }}>
            Events & Veranstaltungen
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto 1.25rem" }} />
          <p style={{ color: "var(--color-muted-fg)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Im Heckenwirt ist immer was los. Hier findet ihr unsere Highlights für die kommende Saison.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-border)",
                padding: "1.75rem",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              className="event-card"
            >
              <h3 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                marginBottom: "0.75rem",
                lineHeight: 1.3,
              }}>
                {event.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-secondary)" }}>
                  <Calendar size={15} /> {event.date}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-secondary)" }}>
                  <Clock size={15} /> {event.time}
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--color-muted-fg)", lineHeight: 1.7 }}>
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .events-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .event-card:hover {
          border-color: var(--color-secondary);
          box-shadow: 0 6px 24px rgba(0,0,0,0.07);
        }
      `}</style>
    </section>
  );
}
