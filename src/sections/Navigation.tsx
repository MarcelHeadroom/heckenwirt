import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Über uns", href: "#ueber-uns" },
  { name: "Speisekarte", href: "#speisekarte" },
  { name: "Galerie", href: "#galerie" },
  { name: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled ? "rgba(250,248,244,0.97)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
        boxShadow: isScrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none",
        padding: isScrolled ? "1rem 0" : "1.5rem 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.4rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: isScrolled ? "var(--color-primary)" : "white",
            textDecoration: "none",
            textShadow: isScrolled ? "none" : "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          HECKENWIRT
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: isScrolled ? "var(--color-foreground)" : "rgba(255,255,255,0.9)",
                textDecoration: "none",
                textShadow: isScrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)",
                transition: "color 0.2s",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontakt"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              padding: "0.6rem 1.4rem",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
          >
            Tisch reservieren
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isScrolled ? "var(--color-primary)" : "white",
            padding: "0.5rem",
          }}
          className="show-mobile"
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: "var(--color-background)",
          borderTop: "1px solid var(--color-border)",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                color: "var(--color-foreground)",
                textDecoration: "none",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.9rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontakt"
            style={{
              marginTop: "0.5rem",
              display: "block",
              textAlign: "center",
              backgroundColor: "var(--color-secondary)",
              color: "white",
              padding: "0.75rem",
              textDecoration: "none",
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.85rem",
            }}
          >
            Tisch reservieren
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
