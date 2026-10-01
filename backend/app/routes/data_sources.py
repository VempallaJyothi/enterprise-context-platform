from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.data_source import DataSourceModel
from app.schemas.data_source import DataSource, DataSourceCreate
from app.services.auth import get_current_user


router = APIRouter(prefix="/api", tags=["Data Sources"])


@router.get("/data-sources", response_model=list[DataSource])
def get_data_sources(db: Session = Depends(get_db)):
    return db.query(DataSourceModel).order_by(DataSourceModel.id).all()


@router.get("/data-sources/{source_id}", response_model=DataSource)
def get_data_source(source_id: int, db: Session = Depends(get_db)):
    source = db.get(DataSourceModel, source_id)
    if source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    return source


@router.post("/data-sources", response_model=DataSource, status_code=status.HTTP_201_CREATED, dependencies=[Depends(get_current_user)])
def create_data_source(payload: DataSourceCreate, db: Session = Depends(get_db)):
    source = DataSourceModel(name=payload.name, icon=payload.icon)
    db.add(source)
    db.commit()
    db.refresh(source)
    return source


@router.put("/data-sources/{source_id}", response_model=DataSource, dependencies=[Depends(get_current_user)])
def update_data_source(source_id: int, payload: DataSourceCreate, db: Session = Depends(get_db)):
    source = db.get(DataSourceModel, source_id)
    if source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    source.name = payload.name
    source.icon = payload.icon
    db.commit()
    db.refresh(source)
    return source


@router.delete("/data-sources/{source_id}", status_code=status.HTTP_204_NO_CONTENT, dependencies=[Depends(get_current_user)])
def delete_data_source(source_id: int, db: Session = Depends(get_db)):
    source = db.get(DataSourceModel, source_id)
    if source is None:
        raise HTTPException(status_code=404, detail="Data source not found")
    db.delete(source)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)