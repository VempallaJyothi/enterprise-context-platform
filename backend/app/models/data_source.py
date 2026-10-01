from sqlalchemy import Column, Integer, String

from app.database import Base


class DataSourceModel(Base):
    __tablename__ = "data_sources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    icon = Column(String(20), nullable=False)