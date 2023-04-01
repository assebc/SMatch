import sqlite3
import jwt
from database_creator import *
from datetime import datetime, timedelta
import time
import os

class backend:
    def __init__(self):
        connected = False
        iterations = 0
        #number of iterations hits 100 then it stops tryong to connect since some other
        #error might be impeding to connect
        while(not connected and iterations<100):
            #if db exists connect to it
            try:
                connection = sqlite3.connect('SmartMatch')
                connected=True
                key = os.urandom(32)
                self.key = key
                print("Connected")
            #else create db then connect to it
            except:
                self.create_db()
                print(f"Retrying {iterations}")

            iterations+=1

        self.connection = connection

    def createJWT(self, userId):
        date_time = datetime.now()
        date_time = date_time + timedelta(minutes=30)
        
        encoded = jwt.encode({
            "userId": userId,
            "exp": time.mktime(date_time.timetuple())
            #"iss": "backend engine"
        }, key=self.key)
        
        return encoded

    def convertToBinaryData(self, filename):
        # Convert digital data to binary format
        with open(filename, 'rb') as file:
            blobData = file.read()
        return blobData

    def createNewUser(self, payload):
        username = payload["username"]
        pwd = payload["pwd"]
        email = payload["email"]

        cursor = self.connection.cursor()
        # check if user exists in db
        sqlite_checkUser_query = f"""SELECT COUNT(*) FROM user where
                                    email = ?"""
        cursor.execute(sqlite_checkUser_query, email)
        result = cursor.fetchone()[0]
        #user already exists
        if result==1:
            return 420

        #create user
        sqlite_createNewUser_query = f"""INSERT INTO user
                                        (name,email,pwd,dob,academicArea,academicDegree,picture)
                                        values(?,?,?,?,?,?,?)
                                    """
        createUserData = (username,email,pwd,payload["academicArea"],payload["academicDegree"],payload["picture"])
        cursor.execute(sqlite_createNewUser_query, createUserData)
        cursor.execute('''
                    SELECT max(id) FROM user''')
        userid = cursor.fetchone()
        print(userid)
        return 200,self.createJWT(result)

    def login(self, payload):
        username = payload["username"]
        email = payload["email"]
        pwd = payload["pwd"]


json = {
    "username": "teste",
    "pwd": "1234",
    "email": "email1@gmail.com",
    "academicArea": "computer science",
    "academicDegree": "3",
    "picture": "a"
}
backend().createNewUser(json)