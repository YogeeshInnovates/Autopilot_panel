
from pydantic import BaseModel

class FirmwareBuildRequest(BaseModel):
    controller_id: int
    version_id: int
    options: list[str] = []

class SaveConfigRequest(BaseModel):
    controller_id: int
    version_id: int
    options: list[str]