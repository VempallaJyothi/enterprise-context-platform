import DataSourceCard from "./DataSourceCard";
import "../styles/DataSources.css";

function DataSources({ sources }) {
  return (
    <div className="data-sources">
      {sources.map((source, index) => (
        <DataSourceCard
          key={source.id}
          name={source.name}
          icon={source.icon}
          delay={index * 0.12}
        />
      ))}
    </div>
  );
}

export default DataSources;