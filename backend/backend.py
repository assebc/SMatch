import sqlite3
import jwt
from database_creator import *
from datetime import datetime, timedelta
import time
import os
import re

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

                cursor = connection.cursor()
                cursor.execute("SELECT * FROM user")
                result = cursor.fetchall()

                connected=True
                #jwt
                key = os.urandom(32)
                self.key = key

                print("Connected")
            #else create db then connect to it
            except:
                create_db()
                print(f"Retrying {iterations}")

            iterations+=1

        self.connection = connection


    def createJWT(self, userId):
        date_time = datetime.now()
        date_time = date_time + timedelta(minutes=30)
        
        encoded = jwt.encode({
            "userId": userId,
            "exp": time.mktime(date_time.timetuple())
        }, key=self.key)
        
        return encoded
    
    def decodeJWT(self, encoded):
        return jwt.decode(encoded, self.key, algorithms=["HS256"])
    
    def verifyExp(self, encoded):
        decode = self.decodeJWT(encoded)
        exp = decode["exp"]
        date = datetime.fromtimestamp(exp)
        if datetime.now() >= date:
            return False
        else:
            return True


    def convertToBinaryData(self, filename):
        # Convert digital data to binary format
        with open(filename, 'rb') as file:
            blobData = file.read()
        return blobData
    
    def updateLocation(self, newLocation, id):
        cursor = self.connection.cursor()
        cursor.execute(f"UPDATE user SET location = '{newLocation}' WHERE id = '{id}'")

    def getInterestsColumns(self):
        cursor = self.connection.cursor()
        cursor.execute("SELECT * FROM interests")
        columns = list(map(lambda x: x[0], cursor.description))
        
        return columns


    def fillInterests(self, interests):
        allInterests = self.getInterestsColumns()
        cursor = self.connection.cursor()

        sqlite3_insert_interests = "INSERT INTO interests ("
        for i in range(1, len(allInterests)):
            sqlite3_insert_interests += allInterests[i]
            if i < len(allInterests)-1:
                sqlite3_insert_interests += ", "
            else:
                sqlite3_insert_interests += ") "

        sqlite3_insert_interests += "VALUES ("

        for i in range(1, len(allInterests)):
            if allInterests[i] in interests:
                sqlite3_insert_interests += "1"
            else:
                sqlite3_insert_interests += "0"

            if i < len(allInterests)-1:
                sqlite3_insert_interests += ", "
            else:
                sqlite3_insert_interests += ")"

        cursor.execute(sqlite3_insert_interests)

        cursor.execute("SELECT id FROM interests")
        result = cursor.fetchone()[0]
        return result


    def updateInterests(self, interests, id):
        allInterests = self.getInterestsColumns()
        cursor = self.connection.cursor()

        cursor.execute(f"SELECT user_interests FROM user WHERE id = '{id}';")
        user_interests = cursor.fetchone()[0]

        sqlite3_update = "UPDATE interests SET "

        for i in range(1, len(allInterests)):
            if allInterests[i] in interests:
                sqlite3_update += allInterests[i] + " = 1"
            else:
                sqlite3_update += allInterests[i] + " = 0"
            
            if i < len(allInterests)-1:
                sqlite3_update += ", "

        sqlite3_update += " WHERE id = " + str(user_interests) + ";"

        cursor.execute(sqlite3_update)

        

    def createNewUser(self, payload):
        username = payload["name"]
        pwd = payload["pwd"]
        email = payload["email"]
        dob = payload["dob"]
        interests = payload["interests"]
        academicFormation = payload["academicArea"]

        cursor = self.connection.cursor()
        # check if user exists in db
        sqlite_checkUser_query = f"""SELECT COUNT(*) FROM user where
                                    email = '{email}'"""
        cursor.execute(sqlite_checkUser_query)
        result = cursor.fetchone()[0]
        #user already exists
        if result!=0:
            return 420, None

        #add interests
        user_interests = self.fillInterests([])

        #create user
        sqlite_createNewUser_query = f"""INSERT INTO user
                                       (name,email,pwd,dob,academicArea,location,picture,user_interests)
                                        values ('{username}', '{email}', '{pwd}', '{payload["dob"]}', '{payload["academicArea"]}', '{payload["location"]}', '{payload["picture"]}', '{user_interests}')
                                    """

        cursor.execute(sqlite_createNewUser_query)

        cursor.execute('''
                    SELECT max(id) FROM user''')
        userid = cursor.fetchone()[0]
        return 200,self.createJWT(int(userid))


    def login(self, payload):
        id = payload["id"]
        pwd = payload["pwd"]
  
        sqlite_checkUser_query = f""" SELECT id from user
                                        WHERE email = '{id}' AND pwd = '{pwd}' 
                                """
            
        cursor = self.connection.cursor()

        cursor.execute(sqlite_checkUser_query)
        result = cursor.fetchone()
        print(result)
        if result != None:
            return 200,self.createJWT(int(result[0]))
        else:
            return 420, None
        
    def getAllUsers(self):
        sqlite_getUsers_query = """SELECT * FROM user"""        
        cursor = self.connection.cursor()
        cursor.execute(sqlite_getUsers_query)
        return cursor.fetchall()
    

    def getUsers(self, token, preferences):
        #decrypt token
        valid = self.verifyExp(token)

        if valid:
            queries= [f"""SELECT id FROM user WHERE julianday('now') - julianday(user.dob) >= {preferences[preference]} AND
                                                            julianday('now') - julianday(user.dob) <= {preferences[preference]}"""]
    
            if preferences["interests"]==1:
                query = """SELECT u.id
                            FROM user u
                            INNER JOIN interests i ON u.interests_id = i.id
                            WHERE i.Mathematics = {current_user.Mathematics}
                            AND i.Portuguese = {current_user.Portuguese}
                            AND i.English = {current_user.English}
                            AND i.German = {current_user.German}
                            AND i.Physics = {current_user.Physics}
                            AND i.Chemistry = {current_user.Chemistry}
                            AND i.Economics = {current_user.Economics}
                            AND i.Biology = {current_user.Biology}
                            AND i.Geology = {current_user.Geology}
                            AND i.History = {current_user.History}
                            AND i.Computing = {current_user.Computing}
                            AND i.Engineering = {current_user.Engineering}
                            AND i.Medicine = {current_user.Medicine}
                            AND i.Nursing = {current_user.Nursing}
                            AND i.Pharmacy = {current_user.Pharmacy}
                            AND i.Education = {current_user.Education}
                            AND i.Law = {current_user.Law}
                            AND i.Psychology = {current_user.Psychology}
                            AND i.Politics = {current_user.Politics}
                            AND i.Sports = {current_user.Sports}
                            AND u.id != {current_user.id};
                        """
                queries.append(query)
                
            

        #expired token
        return 424, None
