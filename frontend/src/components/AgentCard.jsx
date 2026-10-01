function AgentCard({ name, icon, description }) {
  return (
    <div className="agent-card">
      <span className="agent-card__icon">{icon}</span>
      <div>
        <p className="agent-card__name">{name}</p>
        <p className="agent-card__description">{description}</p>
      </div>
    </div>
  );
}

export default AgentCard;