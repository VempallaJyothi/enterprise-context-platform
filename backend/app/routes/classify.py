from fastapi import APIRouter, HTTPException

from app.schemas.classify import ClassifyRequest, ClassifyResponse
from app.services.classifier import classify_text

router = APIRouter(prefix="/api", tags=["Classification"])


@router.post("/classify", response_model=ClassifyResponse)
def classify(payload: ClassifyRequest):
    try:
        scores = classify_text(payload.text)
    except FileNotFoundError as err:
        raise HTTPException(status_code=503, detail=str(err))

    return ClassifyResponse(
        text=payload.text,
        prediction=scores[0]["label"],
        confidence=scores[0]["confidence"],
        scores=scores,
    )