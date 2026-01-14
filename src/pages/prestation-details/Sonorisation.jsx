

import "../../styles/PrestationDetail.css";
console.log("PAGE SONO CHARGÉE");
export default function Sonorisation() {
  const gallery = [
    "/images/prestations/sonorisation-main.jpg",
    "/images/prestations/sonorisation-1.jpg",
    "/images/prestations/sonorisation-2.jpg",
  ];

  return (
    <div className="prestation-detail-page">
      {/* HERO AVEC GRANDE IMAGE + INTRO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img src={gallery[0]} alt="Système de sonorisation" />
        </div>

        <div className="prestation-detail-intro">
          <h1>Sonorisation</h1>
          <p>
            Nos systèmes de sonorisation sont conçus pour offrir une qualité audio
            claire, puissante et homogène, adaptée à tous types d’événements.
            Que ce soit pour un mariage, une soirée privée, un anniversaire ou un
            événement d’entreprise, nous ajustons la configuration selon vos besoins.
          </p>

          <p>
            Ce type de système est idéal pour des événements de 50 à 150 personnes,
            dans des salles allant de 50 à 200 m². Nous proposons également des
            solutions pour l’extérieur ou les grandes salles.
          </p>
        </div>
      </section>

      {/* GALERIE D’IMAGES */}
      <section className="prestation-detail-gallery">
        {gallery.slice(1).map((src, i) => (
          <div className="prestation-detail-thumb" key={i}>
            <img src={src} alt={`Sonorisation vue ${i + 1}`} />
          </div>
        ))}
      </section>

      {/* CONTENU : IDÉAL POUR + OPTIONS */}
      <section className="prestation-detail-content">
        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Événements de 50 à 150 personnes</li>
            <li>Salles de 50 à 200 m²</li>
            <li>Mariages, anniversaires, soirées privées</li>
            <li>Discours, DJ, animations micro</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Options disponibles</h2>
          <ul>
            <li>Enceintes amplifiées 1000W</li>
            <li>Caisson de basses pour plus d’impact</li>
            <li>Micros filaires ou HF (sans fil)</li>
            <li>Table de mixage / contrôleur DJ</li>
            <li>Régie son avec technicien sur place</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="prestation-detail-cta">
        <h2>Envie d’un son adapté à votre événement ?</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>
    </div>
  );
}
