from pydantic import BaseModel

class Account(BaseModel):
    name : str
    email : str
    pwd : str
    dob: str
    interests : list
    location : str
    academicArea : str
    picture : str

class Preferences(BaseModel):
    ageLowerBound : int
    ageUpperBound: int
    interests: int
    distance : int
    academics : int

class Login(BaseModel):
    id:str
    pwd:str