export function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--color-primary)",
      color: "rgba(255,255,255,0.7)",
      padding: "3rem 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="footer-inner">
          <div>
            <span style={{
              display: "block",
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "white",
              marginBottom: "0.5rem",
            }}>
              HECKENWIRT
            </span>
            <p style={{ fontSize: "0.85rem" }}>
              Bad Mergentheimer Str. 26 · 97999 Igersheim
            </p>
            <p style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
              &copy; {new Date().getFullYear()} Heckenwirt Igersheim. Alle Rechte vorbehalten.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
              Impressum
            </a>
            <a href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}>
              Datenschutz
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
