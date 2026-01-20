import "../../styles/PrestationDetail.css";

export default function Eclairage() {
  const gallery = [
    "/images/prestations/eclairage_main.jpg",
    "/images/prestations/eclairage-1.jpg",
    "/images/prestations/eclairage-2.webp",
  ];

  return (
    <div className="prestation-detail-page">

      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img src={gallery[0]} alt="Éclairage LED" />
        </div>

        <div className="prestation-detail-intro">
          <h1>Éclairage d'ambiance LED</h1>
          <p>
            Créez une ambiance lumineuse moderne et immersive grâce à nos
            éclairages LED. Parfait pour sublimer une salle, une piste de danse
            ou un espace extérieur.
          </p>
          <p>
            Nos éclairages sont entièrement personnalisables : couleurs,
            intensité, effets dynamiques, synchronisation musicale.
          </p>
        </div>
      </section>

      <section className="prestation-detail-gallery">
        {gallery.slice(1).map((src, i) => (
          <div className="prestation-detail-thumb" key={i}>
            <img src={src} alt={`Éclairage vue ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="prestation-detail-content">
        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Mariages</li>
            <li>Salles de réception</li>
            <li>Soirées privées</li>
            <li>Ambiance lounge ou festive</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Options disponibles</h2>
          <ul>
            <li>Par à Led LED RGB</li>
            <li>Jeux de lumière</li>
            <li>Effets dynamiques</li>
            <li>Synchronisation musicale</li>
          </ul>
        </div>
      </section>

      <section className="prestation-detail-cta">
        <h2>Envie d’une ambiance lumineuse unique ?</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}