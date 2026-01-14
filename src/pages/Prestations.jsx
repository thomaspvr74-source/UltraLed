import { Link } from "react-router-dom";
import "../styles/Prestations.css";

export default function Prestations() {
  const prestations = [
    {
      slug: "sonorisation",
      title: "Sonorisation",
      desc: "Systèmes audio puissants et clairs pour tous types d’événements.",
      img: "images/prestations/sonorisation-main.jpg",
    },
    {
      slug: "eclairage",
      title: "Éclairage",
      desc: "Ambiance lumineuse moderne, dynamique et personnalisée.",
      img: "images/prestations/eclairage-main.png",
    },
    {
      slug: "dj-animation",
      title: "DJ & Animation",
      desc: "Une ambiance musicale adaptée à votre soirée.",
      img: "images/prestations/dj-main.png",
    },
    {
      slug: "eclairage-scenique",
      title: "Éclairage Scénique",
      desc: "Projecteurs, effets et mise en scène professionnelle.",
      img: "images/prestations/eclairage-scenique-main.jpg",
    },
  ];

  return (
    <div className="prestations-page">

      {/* HERO */}
      <section className="prestations-hero">
        <h1>Nos Prestations</h1>
        <p>Son, lumière et ambiance LED pour sublimer vos événements.</p>
      </section>

      {/* GRILLE DE PRESTATIONS */}
      <section className="prestations-grid">
        {prestations.map((item) => (
          <Link
            key={item.slug}
            to={`/prestation/${item.slug}`}
            className="prestation-card-link"
          >
            <div className="prestation-card">
              <div className="prestation-img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* PACKS */}
      <section className="prestations-packs">
        <h2>Nos Packs</h2>

        <div className="packs-grid">
          {[
            {
              name: "Essentiel",
              price: "À partir de 149€",
              features: ["Sonorisation", "Éclairage LED", "Installation"],
            },
            {
              name: "Avancé",
              price: "À partir de 249€",
              features: ["Sonorisation", "Éclairage LED", "DJ", "Effets lumineux"],
            },
            {
              name: "Premium",
              price: "À partir de 399€",
              features: [
                "Sonorisation",
                "Éclairage LED",
                "DJ",
                "Effets scéniques",
                "Machine à fumée",
              ],
            },
          ].map((pack, i) => (
            <div className="pack-card" key={i}>
              <h3>{pack.name}</h3>
              <p className="pack-price">{pack.price}</p>
              <ul>
                {pack.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button className="pack-cta">Demander un devis</button>
            </div>
          ))}
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="prestations-why">
        <h2>Pourquoi nous choisir ?</h2>

        <div className="why-grid">
          {[
            "Matériel professionnel",
            "Ambiance LED moderne",
            "Installation rapide",
            "Accompagnement personnalisé",
          ].map((item, i) => (
            <div className="why-card" key={i}>
              <span className="why-icon">★</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="prestations-final-cta">
        <h2>Prêt à illuminer votre événement ?</h2>
        <button className="final-cta-btn">Demander un devis</button>
      </section>

    </div>
  );
}
