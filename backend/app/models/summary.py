from sqlalchemy import Column, Integer, String

from app.database import Base


class SummaryModel(Base):
    __tablename__ = "summary"

    id = Column(Integer, primary_key=True)
    data_sources = Column(Integer, nullable=False)
    metadata_assets = Column(String(20), nullable=False)
    coverage = Column(Integer, nullable=False)
    ai_agents = Column(Integer, nullable=False)