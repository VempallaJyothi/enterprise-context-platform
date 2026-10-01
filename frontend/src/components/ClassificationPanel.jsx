const CLASSES = [
  { id: 1, label: "Public 46%", color: "#4f7cff" },
  { id: 2, label: "Internal 32%", color: "#22d3ee" },
  { id: 3, label: "Confidential 18%", color: "#8b5cf6" },
  { id: 4, label: "Restricted 4%", color: "#f472b6" },
];

function ClassificationPanel() {
  return (
    <div className="panel">
      <h4 className="panel__title">Classification</h4>
      <div className="panel__body">
        <div className="donut">
          <div className="donut__hole"></div>
        </div>
        <ul className="legend">
          {CLASSES.map((item) => (
            <li key={item.id}>
              <span
                className="legend__dot"
                style={{ background: item.color }}
              ></span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassificationPanel;