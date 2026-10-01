from pydantic import BaseModel, ConfigDict


class Summary(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    data_sources: int
    metadata_assets: str
    coverage: int
    ai_agents: int