from pydantic import BaseModel, ConfigDict, Field


class DataSourceCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    icon: str = Field(min_length=1, max_length=20)


class DataSource(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    icon: str