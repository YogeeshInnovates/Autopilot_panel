
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker

# MySQL connection string
# Format: mysql+mysqlconnector://<username>:<password>@<host>/<database_name>
DATA_BASE_URL="mysql+pymysql://root:mysql%402025fastapi@localhost/autopilot"

engine=create_engine(DATA_BASE_URL)
sessionlocal=sessionmaker(bind=engine)
Base=declarative_base()



def get_db():
    db=sessionlocal()
    try:
        yield db
    finally:
        db.close()