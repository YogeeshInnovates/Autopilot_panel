from fastapi import FastAPI
from dashboardheader import router as dashboard_router

app = FastAPI(title="Device Scanner API")

app.include_router(dashboard_router)

# Run using: uvicorn main:app --reload --port 8000
