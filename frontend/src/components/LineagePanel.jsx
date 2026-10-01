function LineagePanel() {
  return (
    <div className="panel">
      <h4 className="panel__title">Data Lineage</h4>
      <div className="panel__body">
        <svg viewBox="0 0 200 140" width="100%" height="140">
          <g stroke="#4f7cff" strokeWidth="1.5" opacity="0.7">
            <line x1="100" y1="20" x2="40" y2="70" />
            <line x1="100" y1="20" x2="160" y2="70" />
            <line x1="40" y1="70" x2="70" y2="120" />
            <line x1="160" y1="70" x2="130" y2="120" />
            <line x1="40" y1="70" x2="160" y2="70" />
          </g>
          <g fill="#8b5cf6">
            <circle cx="100" cy="20" r="9" />
            <circle cx="40" cy="70" r="8" />
            <circle cx="160" cy="70" r="8" />
            <circle cx="70" cy="120" r="7" />
            <circle cx="130" cy="120" r="7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default LineagePanel;