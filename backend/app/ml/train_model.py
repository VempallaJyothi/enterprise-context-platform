from pathlib import Path

import fasttext

ML_DIR = Path(__file__).parent
TRAIN_FILE = ML_DIR / "train.txt"
MODEL_FILE = ML_DIR / "classifier.bin"


def train():
    model = fasttext.train_supervised(
        input=str(TRAIN_FILE),
        epoch=50,
        lr=0.5,
        wordNgrams=2,
        minCount=1,
        dim=50,
    )
    model.save_model(str(MODEL_FILE))
    print(f"Model saved to {MODEL_FILE}")

    labels, probs = model.predict("customer credit card number", k=1)
    print("Test prediction:", labels[0], round(float(probs[0]), 2))


if __name__ == "__main__":
    train()