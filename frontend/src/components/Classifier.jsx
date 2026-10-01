import { useState } from "react";
import { classifyText } from "../services/api";
import "../styles/Classifier.css";

const EXAMPLES = [
  "customer credit card number",
  "employee salary details",
  "team holiday calendar",
  "published press release",
];

function Classifier() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function runClassify(value) {
    setError(null);
    setLoading(true);
    try {
      const data = await classifyText(value);
      setResult(data);
    } catch (err) {
      setResult(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim()) {
      runClassify(text);
    }
  }

  function handleExample(example) {
    setText(example);
    runClassify(example);
  }

  return (
    <section className="classifier">
      <div className="classifier__box">
        <h2 className="classifier__title">Try the AI Classifier</h2>
        <p className="classifier__subtitle">
          Describe a data field and the model predicts its sensitivity level.
        </p>

        <form className="classifier__form" onSubmit={handleSubmit}>
          <input
            className="classifier__input"
            placeholder="e.g. customer bank account number"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={500}
          />
          <button className="classifier__button" disabled={loading || !text.trim()}>
            {loading ? "Classifying..." : "Classify"}
          </button>
        </form>

        <div className="classifier__examples">
          {EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              className="classifier__chip"
              onClick={() => handleExample(example)}
            >
              {example}
            </button>
          ))}
        </div>

        {error && <p className="classifier__error">{error}</p>}

        {result && (
          <div>
            <p className="classifier__result-label">
              Predicted: <strong>{result.prediction}</strong>
            </p>
            {result.scores.map((score) => (
              <div key={score.label} className="classifier__row">
                <span>{score.label}</span>
                <div className="classifier__bar">
                  <div
                    className="classifier__bar-fill"
                    style={{ width: `${Math.round(score.confidence * 100)}%` }}
                  ></div>
                </div>
                <span>{Math.round(score.confidence * 100)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Classifier;