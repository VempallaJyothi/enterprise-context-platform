function OutcomeCard({ label, icon }) {
  return (
    <div className="outcome-card">
      <span className="outcome-card__icon">{icon}</span>
      <span className="outcome-card__label">{label}</span>
    </div>
  );
}

export default OutcomeCard;