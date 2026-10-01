import "../styles/Status.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="status">
      <h2 className="status__title">Something went wrong</h2>
      <p className="status__text">{message}</p>
      <button className="status__button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorMessage;