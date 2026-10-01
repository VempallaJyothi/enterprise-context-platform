from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.agent import AgentModel
from app.models.data_source import DataSourceModel
from app.models.summary import SummaryModel
from app.schemas.ask import AskRequest, AskResponse
from app.services.classifier import classify_text
from app.services.llm import answer_question

router = APIRouter(prefix="/api", tags=["Ask"])


@router.post("/ask", response_model=AskResponse)
def ask(payload: AskRequest, db: Session = Depends(get_db)):
    try:
        classification = classify_text(payload.question)
    except FileNotFoundError:
        classification = []

    context = {
        "data_sources": [s.name for s in db.query(DataSourceModel).order_by(DataSourceModel.id)],
        "agents": [
            {"name": a.name, "description": a.description}
            for a in db.query(AgentModel).order_by(AgentModel.id)
        ],
        "summary": db.query(SummaryModel).first(),
        "classification": classification,
    }

    result = answer_question(payload.question, context)
    return AskResponse(question=payload.question, **result)