import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

DATA_BASE_URL = os.getenv(
    "DATABASE_URL", 
    "mysql+pymysql://root:tharun@localhost/betaflight_configurator"
)

engine = create_engine(DATA_BASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
