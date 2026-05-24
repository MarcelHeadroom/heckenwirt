const images = [
  { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80", alt: "Biergarten im Sommer" },
  { src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80", alt: "Frisches Bier" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80", alt: "Grill & Bratwurst" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Gemütliche Atmosphäre" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", alt: "Geselligkeit" },
  { src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80", alt: "Sommerabend" },
];

export function Gallery() {
  return (
    <section id="galerie" style={{ padding: "6rem 0", backgroundColor: "var(--color-primary)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 4rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "1rem",
          }}>
            Impressionen
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto 1.25rem" }} />
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Bilder sagen mehr als tausend Worte. Ein kleiner Einblick in den Heckenwirt.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item" style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", backgroundColor: "rgba(255,255,255,0.05)" }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", display: "block" }}
                className="gallery-img"
              />
              <div className="gallery-overlay" style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}>
                <span style={{
                  color: "white",
                  fontFamily: "var(--font-serif)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  fontSize: "0.85rem",
                }}>
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
