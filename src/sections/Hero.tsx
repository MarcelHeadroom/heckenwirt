import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section style={{ position: "relative", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          alt="Biergarten Atmosphäre"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: 860, marginTop: "5rem" }}>
        <span style={{
          display: "block",
          color: "var(--color-secondary)",
          textTransform: "uppercase",
          letterSpacing: "0.35em",
          marginBottom: "1.25rem",
          fontSize: "0.75rem",
          fontWeight: 600,
        }}>
          Tradition seit Generationen
        </span>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          color: "white",
          marginBottom: "1.25rem",
          lineHeight: 1.08,
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
        }}>
          Willkommen im<br />Heckenwirt
        </h1>

        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
          color: "rgba(255,255,255,0.78)",
          fontWeight: 300,
          maxWidth: 520,
          margin: "0 auto 2.75rem",
          lineHeight: 1.7,
        }}>
          Einer der schönsten Biergärten im Taubertal. Kaltes Bier, deftiges vom Grill und Schatten unter alten Kastanien.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <a
            href="#kontakt"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Tisch reservieren
          </a>
          <a
            href="#speisekarte"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              backgroundColor: "transparent",
              color: "white",
              padding: "0.9rem 2.5rem",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.8)",
              transition: "background-color 0.2s",
            }}
          >
            Speisekarte ansehen
          </a>
        </div>
      </div>

      <a
        href="#ueber-uns"
        aria-label="Nach unten scrollen"
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.45)", textDecoration: "none", animation: "heroBounce 2s infinite" }}
      >
        <ArrowDown size={28} strokeWidth={1} />
      </a>

      <style>{`
        @keyframes heroBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
