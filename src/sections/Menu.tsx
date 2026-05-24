import { useState } from "react";

const menuData = {
  drinks: [
    { name: "Helles vom Fass", price: "4,20 €", desc: "0,5l" },
    { name: "Hefeweizen", price: "4,40 €", desc: "0,5l" },
    { name: "Radler", price: "4,20 €", desc: "0,5l" },
    { name: "Apfelschorle", price: "3,50 €", desc: "0,5l" },
    { name: "Taubertaler Weinschorle", price: "4,80 €", desc: "0,25l" },
    { name: "Cola / Fanta / Sprite", price: "3,20 €", desc: "0,3l" },
  ],
  regional: [
    { name: "Käsespätzle", price: "12,90 €", desc: "Mit Röstzwiebeln und kleinem Beilagensalat" },
    { name: "Wurstsalat", price: "9,50 €", desc: "Nach Art des Hauses mit Bauernbrot" },
    { name: "Schweinebraten", price: "15,80 €", desc: "Mit Dunkelbiersoße und Knödeln" },
    { name: "Obatzda", price: "8,90 €", desc: "Mit roten Zwiebeln und frischer Brezel" },
    { name: "Schnitzel Wiener Art", price: "14,90 €", desc: "Mit Pommes und Preiselbeeren" },
    { name: "Tagessuppe", price: "5,50 €", desc: "Bitte nachfragen" },
  ],
  grill: [
    { name: "Bratwurst im Weckla", price: "4,50 €", desc: "Frisch vom Holzkohlegrill" },
    { name: "Schweinenackensteak", price: "14,50 €", desc: "Mit hausgemachtem Kartoffelsalat" },
    { name: "Grillhähnchen", price: "11,90 €", desc: "Halbes Hähnchen mit Pommes" },
    { name: "Vegetarischer Grillkäse", price: "10,50 €", desc: "Mit mediterranem Grillgemüse" },
    { name: "Spareribs", price: "16,90 €", desc: "Mit BBQ-Sauce und Coleslaw" },
  ],
  snacks: [
    { name: "Große Brezel", price: "2,50 €", desc: "Frisch gebacken" },
    { name: "Portion Pommes", price: "4,00 €", desc: "Mit Ketchup oder Mayo" },
    { name: "Kartoffelsalat", price: "4,50 €", desc: "Hausgemacht nach Omas Rezept" },
    { name: "Rettichsalat", price: "4,20 €", desc: "Mit Schnittlauch" },
    { name: "Käsebrot", price: "3,80 €", desc: "Mit Butter und Radieschen" },
  ],
};

const tabs = [
  { key: "drinks" as const, label: "Bier & Getränke" },
  { key: "regional" as const, label: "Regionale Gerichte" },
  { key: "grill" as const, label: "Vom Grill" },
  { key: "snacks" as const, label: "Snacks" },
];

type TabKey = keyof typeof menuData;

export function Menu() {
  const [active, setActive] = useState<TabKey>("drinks");

  return (
    <section id="speisekarte" style={{ padding: "6rem 0", backgroundColor: "var(--color-background)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "1rem",
          }}>
            Unsere Speisekarte
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto 1.25rem" }} />
          <p style={{ color: "var(--color-muted-fg)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Deftig, regional und immer frisch.
          </p>
        </div>

        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          backgroundColor: "var(--color-card)",
          border: "1px solid var(--color-border)",
          padding: "clamp(1.5rem, 4vw, 3rem)",
        }}>
          {/* Tab buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  padding: "0.6rem 1.25rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s, color 0.2s",
                  fontWeight: 600,
                  backgroundColor: active === tab.key ? "var(--color-primary)" : "var(--color-muted)",
                  color: active === tab.key ? "white" : "var(--color-muted-fg)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu items */}
          <div className="menu-grid">
            {menuData[active].map((item, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", gap: "0.5rem" }}>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-foreground)", whiteSpace: "nowrap" }}>
                    {item.name}
                  </h4>
                  <div style={{ flex: 1, borderBottom: "1px dotted var(--color-border)", marginBottom: "0.2rem" }} />
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 700, color: "var(--color-secondary)", whiteSpace: "nowrap" }}>
                    {item.price}
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--color-muted-fg)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem 3rem;
        }
        @media (min-width: 640px) {
          .menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
