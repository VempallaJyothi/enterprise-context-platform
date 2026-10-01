import StatCard from "./StatCard";
import LineagePanel from "./LineagePanel";
import ClassificationPanel from "./ClassificationPanel";
import InsightsPanel from "./InsightsPanel";
import "../styles/Dashboard.css";

function Dashboard({ summary }) {
  if (!summary) {
    return null;
  }
  return (
    <section className="dashboard">
      <div className="dashboard__frame">
        <h2 className="dashboard__title">Enterprise Data Context</h2>
        <p className="dashboard__subtitle">Last 30 days</p>

        <div className="dashboard__stats">
          <StatCard value={`${summary.data_sources}+`} label="Data Sources" />
          <StatCard value={summary.metadata_assets} label="Metadata Assets" />
          <StatCard value={`${summary.coverage}%`} label="Coverage" />
          <StatCard value={summary.ai_agents} label="AI Agents" />
        </div>

        <div className="dashboard__panels">
          <LineagePanel />
          <ClassificationPanel />
          <InsightsPanel />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;