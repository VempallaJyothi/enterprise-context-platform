from app.database import Base, SessionLocal, engine
from app.models import AgentModel, DataSourceModel, SummaryModel
from app.services.sample_data import AGENTS, DATA_SOURCES, SUMMARY


def seed():
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()
    try:
        if db.query(SummaryModel).count() == 0:
            db.add(SummaryModel(id=1, **SUMMARY))
        if db.query(DataSourceModel).count() == 0:
            db.add_all([DataSourceModel(**item) for item in DATA_SOURCES])
        if db.query(AgentModel).count() == 0:
            db.add_all([AgentModel(**item) for item in AGENTS])
        db.commit()
        print("Database seeded successfully.")
    finally:
        db.close()


if __name__ == "__main__":
    seed()