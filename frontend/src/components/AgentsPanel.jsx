import AgentCard from "./AgentCard";
import "../styles/Agents.css";

function AgentsPanel({ agents }) {
  return (
    <div className="agents-panel">
      <h3 className="agents-panel__title">AI Agents</h3>
      <div className="agents-panel__list">
        {agents.map((agent) => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            icon={agent.icon}
            description={agent.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AgentsPanel;