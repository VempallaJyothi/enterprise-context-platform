from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import UserModel
from app.schemas.auth import LoginRequest, Token, UserOut
from app.services.auth import get_current_user
from app.services.security import create_access_token, verify_password

router = APIRouter(prefix="/api/auth", tags=["Auth"])


@router.post("/login", response_model=Token)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.username == payload.username).first()

    if user is None or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
        )

    return Token(access_token=create_access_token(user.username))


@router.get("/me", response_model=UserOut)
def read_current_user(current_user: UserModel = Depends(get_current_user)):
    return current_user