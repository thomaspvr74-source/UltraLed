import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact & Devis</h1>
        <p>Parlez-nous de votre événement.</p>
      </section>

      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Type d'événement" />
        <textarea placeholder="Votre message" rows="5" />

        <button type="submit" className="contact-btn">
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
