import { useState } from "react";
import { askQuestion } from "../services/api";
import "../styles/AskPanel.css";

function AskPanel() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const asked = question.trim();
    if (!asked) return;

    setError(null);
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: asked }]);
    setQuestion("");

    try {
      const data = await askQuestion(asked);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.answer, sources: data.sources },
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="ask">
      <div className="ask__box">
        <h2 className="ask__title">Ask the Context Layer</h2>
        <p className="ask__subtitle">
          Ask about data sources, agents, platform stats, or data sensitivity.
        </p>

        {messages.length > 0 && (
          <div className="ask__messages">
            {messages.map((message, index) => (
              <div key={index} className={`ask__message ask__message--${message.role}`}>
                {message.text}
                {message.sources && message.sources.length > 0 && (
                  <p className="ask__sources">Sources: {message.sources.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {error && <p className="ask__error">{error}</p>}

        <form className="ask__form" onSubmit={handleSubmit}>
          <input
            className="ask__input"
            placeholder="e.g. Which data sources are connected?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            maxLength={300}
          />
          <button className="ask__button" disabled={loading || !question.trim()}>
            {loading ? "Thinking..." : "Ask"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AskPanel;