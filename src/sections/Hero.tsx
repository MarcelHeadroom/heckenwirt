import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section style={{ position: "relative", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=1920&q=80"
          alt="Biergarten Atmosphäre"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.52)" }} />
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        padding: "0 1.5rem",
        maxWidth: 860,
        marginTop: "5rem",
      }}>
        <span style={{
          display: "block",
          color: "var(--color-secondary)",
          fontFamily: "var(--font-sans)",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          marginBottom: "1rem",
          fontSize: "0.85rem",
          fontWeight: 600,
        }}>
          Tradition seit Generationen
        </span>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          color: "white",
          marginBottom: "1.25rem",
          lineHeight: 1.1,
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
        }}>
          Willkommen im Heckenwirt
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "rgba(255,255,255,0.9)",
          fontWeight: 300,
          marginBottom: "2.5rem",
          maxWidth: 600,
          margin: "0 auto 2.5rem",
          lineHeight: 1.6,
          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}>
          Einer der schönsten Biergärten im Taubertal. Kaltes Bier, deftiges vom Grill und Schatten unter alten Kastanien.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <a
            href="tel:+4979312348"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Tisch reservieren
          </a>
          <a
            href="#speisekarte"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              backgroundColor: "transparent",
              color: "white",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.7)",
              transition: "background-color 0.2s, border-color 0.2s",
            }}
          >
            Speisekarte ansehen
          </a>
        </div>
      </div>

      <a
        href="#ueber-uns"
        aria-label="Nach unten scrollen"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.65)",
          textDecoration: "none",
          animation: "bounce 2s infinite",
        }}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
