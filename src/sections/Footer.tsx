export function Footer() {
  return (
    <footer style={{
      backgroundColor: "var(--color-primary)",
      color: "rgba(255,255,255,0.55)",
      padding: "2.5rem 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="footer-inner">
          <div>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.12em", color: "white", marginBottom: "0.35rem" }}>
              HECKENWIRT
            </span>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>
              Bad Mergentheimer Straße 26<br />
              97999 Igersheim
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.75rem", marginBottom: "0.4rem" }}>
              &copy; {new Date().getFullYear()} Heckenwirt Igersheim
            </p>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "flex-end" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.75rem" }}>Impressum</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.75rem" }}>Datenschutz</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .footer-inner { flex-direction: row; justify-content: space-between; align-items: flex-start; }
        }
      `}</style>
    </footer>
  );
}
