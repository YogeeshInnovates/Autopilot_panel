from fastapi import FastAPI
from dashboardheader import router as dashboard_router

app = FastAPI(title="Device Scanner API")
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or your frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(dashboard_router)

# Run using: uvicorn main:app --reload --port 8000
