from fastapi import FastAPI

from app.api.routes.health import router as health_router
from app.core.config import PROJECT_NAME

app = FastAPI(title=PROJECT_NAME)
app.include_router(health_router)
