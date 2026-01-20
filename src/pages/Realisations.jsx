import "../styles/Realisations.css";

const videos = [
  <video src={'${import.meta.env.BASE_URL}videos/event1.mp4'} />,
  <video src={'${import.meta.env.BASE_URL}videos/event2.mp4'} />,
  <video src={'${import.meta.env.BASE_URL}videos/event3.mp4'} />,
  <video src={'${import.meta.env.BASE_URL}videos/event4.mp4'} />,
];

export default function Realisations() {
  return (
    <div className="realisations-page">
      <section className="realisations-hero">
        <h1>Nos Réalisations</h1>
        <p>Un aperçu de nos événements son & lumière.</p>
      </section>

      <section className="realisations-grid">
        {videos.map((src, i) => (
          <div className="real-card" key={i}>
            <div className="real-img">
              <video
                src={src}
                controls
                muted
                playsInline
              />
            </div>
            <h3>Événement #{i + 1}</h3>
            <p>Ambiance LED, sonorisation et mise en lumière.</p>
          </div>
        ))}
      </section>
    </div>
  );
}