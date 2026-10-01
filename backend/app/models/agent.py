from sqlalchemy import Column, Integer, String

from app.database import Base


class AgentModel(Base):
    __tablename__ = "agents"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    icon = Column(String(20), nullable=False)
    description = Column(String(255), nullable=False)