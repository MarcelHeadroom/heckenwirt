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
    <section id="galerie" style={{ padding: "6rem 0", backgroundColor: "#1c130a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 3.5rem" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            marginBottom: "1.25rem",
          }}>
            Ein kleiner Einblick in den Heckenwirt
          </h2>
          <div style={{ width: 64, height: 4, backgroundColor: "var(--color-secondary)", margin: "0 auto" }} />
        </div>

        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div
              key={idx}
              style={{
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  );
}
