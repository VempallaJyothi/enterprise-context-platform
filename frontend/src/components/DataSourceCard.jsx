function DataSourceCard({ name, icon, delay }) {
  return (
    <div className="data-source-card" style={{ animationDelay: `${delay}s` }}>
      <span className="data-source-card__icon">{icon}</span>
      <span className="data-source-card__name">{name}</span>
    </div>
  );
}

export default DataSourceCard;