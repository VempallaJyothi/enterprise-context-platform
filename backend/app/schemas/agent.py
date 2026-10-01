from pydantic import BaseModel, ConfigDict


class Agent(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    icon: str
    description: str