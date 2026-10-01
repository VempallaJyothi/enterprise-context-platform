from fastapi import APIRouter

from app.schemas.health import HealthResponse

router = APIRouter(prefix="/api", tags=["Health"])


@router.get("/health", response_model=HealthResponse)
def health_check():
    return {
        "status": "ok",
        "message": "Backend is running",
    }