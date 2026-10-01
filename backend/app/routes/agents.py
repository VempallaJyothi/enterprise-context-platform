from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.agent import AgentModel
from app.schemas.agent import Agent

router = APIRouter(prefix="/api", tags=["Agents"])


@router.get("/agents", response_model=list[Agent])
def get_agents(db: Session = Depends(get_db)):
    return db.query(AgentModel).order_by(AgentModel.id).all()