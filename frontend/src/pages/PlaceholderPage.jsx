import "../styles/Page.css";

function PlaceholderPage({ title, text }) {
  return (
    <section className="page">
      <h1 className="page__title">{title}</h1>
      <p className="page__text">{text}</p>
    </section>
  );
}

export default PlaceholderPage;
