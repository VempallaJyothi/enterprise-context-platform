from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.summary import SummaryModel
from app.schemas.summary import Summary

router = APIRouter(prefix="/api", tags=["Summary"])


@router.get("/summary", response_model=Summary)
def get_summary(db: Session = Depends(get_db)):
    summary = db.query(SummaryModel).first()
    if summary is None:
        raise HTTPException(status_code=404, detail="Summary not found")
    return summary