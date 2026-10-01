import OutcomeCard from "./OutcomeCard";
import "../styles/Outcomes.css";

const OUTCOMES = [
  { id: 1, label: "Faster Decisions", icon: "⚡" },
  { id: 2, label: "Higher Productivity", icon: "📈" },
  { id: 3, label: "Lower Risk", icon: "🛡️" },
  { id: 4, label: "More Business Value", icon: "💎" },
];

function OutcomesPanel() {
  return (
    <div className="outcomes-panel">
      <h3 className="outcomes-panel__title">Business Outcomes</h3>
      <div className="outcomes-panel__list">
        {OUTCOMES.map((outcome) => (
          <OutcomeCard
            key={outcome.id}
            label={outcome.label}
            icon={outcome.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default OutcomesPanel;