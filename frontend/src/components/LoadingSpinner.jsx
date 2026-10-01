import "../styles/Status.css";

function LoadingSpinner() {
  return (
    <div className="status">
      <div className="spinner"></div>
      <p className="status__text">Loading platform data...</p>
    </div>
  );
}

export default LoadingSpinner;