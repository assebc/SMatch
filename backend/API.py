from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from classes import *
from backend import *
import datetime

app = FastAPI()
my_backend = backend()

@app.post("/signup")
async def createAccount(conta:Account):
    if conta!=None:
        name = conta.name
        email = conta.email
        pwd = conta.pwd
        dob = conta.dob
        location = conta.location
        interests = conta.interests
        academicArea = conta.academicArea
        picture = conta.picture

        statusCode, payload = my_backend.createNewUser({"name":name, "email":email, "pwd":pwd, "dob":dob,"interests":interests, "location": location,"academicArea":academicArea, "picture":picture})
        if statusCode!=200:
            raise HTTPException(status_code = 422, detail="User already exists")
        
        print(payload)
        return payload

@app.post("/login")
async def login(user:Login):
    statusCode, result = my_backend.login({"id":user.id, "pwd": user.pwd})

    if statusCode!=200:
        raise HTTPException(status_code=422, detail="Invalid username or password")
    
    return result

@app.get("/getAllUsers")
async def getAllUsers():
    return my_backend.getAllUsers()

@app.get("/getUsers")
async def getUsers(token:str, 
                   ageLowerBound: int = Query(None, description="Lower bound of age range", ge=0),
                    ageUpperBound: int = Query(None, description="Upper bound of age range", ge=0),
                    interests: int = Query(None, description="Interests of user", ge=0),
                    distance: int = Query(None, description="Distance range", ge=0),
                    academics: int = Query(None, description="Academic degree of user", ge=0)):
    if token!="":
        statusCode, payload = my_backend.getUsers(token, {"ageLowerBound":ageLowerBound, "ageUpperBound":ageUpperBound
                                             ,"interests":interests, "distance":distance, "academics":academics})
        if statusCode!=200:
            raise HTTPException(status_code=424, detail="Invalid Token")        
    raise HTTPException(status_code=423, detail="Unauthorized user")
