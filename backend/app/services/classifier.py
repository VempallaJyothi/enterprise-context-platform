from pathlib import Path

import fasttext

MODEL_PATH = Path(__file__).parent.parent / "ml" / "classifier.bin"

_model = None


def get_model():
    global _model
    if _model is None:
        if not MODEL_PATH.exists():
            raise FileNotFoundError("Model not trained. Run: python -m app.ml.train_model")
        _model = fasttext.load_model(str(MODEL_PATH))
    return _model


def classify_text(text: str, top_k: int = 4) -> list[dict]:
    cleaned = " ".join(text.lower().split())
    labels, probs = get_model().predict(cleaned, k=top_k)
    return [
        {"label": label.replace("__label__", ""), "confidence": round(float(prob), 4)}
        for label, prob in zip(labels, probs)
    ]