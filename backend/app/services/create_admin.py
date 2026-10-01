from getpass import getpass

from app.database import Base, SessionLocal, engine
from app.models import UserModel
from app.services.security import hash_password


def create_admin():
    Base.metadata.create_all(bind=engine)

    username = input("Admin username: ").strip()
    password = getpass("Admin password: ")

    if not username or not password:
        print("Username and password are required.")
        return

    db = SessionLocal()
    try:
        if db.query(UserModel).filter(UserModel.username == username).first():
            print("That username already exists.")
            return
        db.add(UserModel(username=username, hashed_password=hash_password(password)))
        db.commit()
        print(f"Admin user '{username}' created.")
    finally:
        db.close()


if __name__ == "__main__":
    create_admin()