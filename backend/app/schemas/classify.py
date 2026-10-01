from pydantic import BaseModel, Field


class ClassifyRequest(BaseModel):
    text: str = Field(min_length=1, max_length=500)


class ClassScore(BaseModel):
    label: str
    confidence: float


class ClassifyResponse(BaseModel):
    text: str
    prediction: str
    confidence: float
    scores: list[ClassScore]