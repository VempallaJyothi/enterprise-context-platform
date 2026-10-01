from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
import app.models

from app.routes import agents, ask, auth, classify, data_sources, health, summary
app = FastAPI(
    title="Enterprise Context Platform API",
    description="Backend API for the Enterprise Context & AI Intelligence Platform",
    version="0.1.0",
)

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(summary.router)
app.include_router(data_sources.router)
app.include_router(agents.router)
app.include_router(auth.router)
app.include_router(classify.router)
app.include_router(ask.router)


@app.get("/")
def read_root():
    return {"message": "Enterprise Context Platform API is running"}