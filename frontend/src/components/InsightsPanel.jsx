function InsightsPanel() {
  return (
    <div className="panel">
      <h4 className="panel__title">AI Insights</h4>
      <div className="panel__body" style={{ position: "relative" }}>
        <span className="insights__badge">+42%</span>
        <svg viewBox="0 0 200 120" width="100%" height="130">
          <polyline
            points="0,100 30,90 60,95 90,70 120,60 150,35 200,15"
            fill="none"
            stroke="#4f7cff"
            strokeWidth="3"
          />
          <polygon
            points="0,100 30,90 60,95 90,70 120,60 150,35 200,15 200,120 0,120"
            fill="rgba(79, 124, 255, 0.15)"
          />
        </svg>
      </div>
    </div>
  );
}

export default InsightsPanel;