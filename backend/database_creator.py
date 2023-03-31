import sqlite3
import pandas as pd

class Database:

    def __init__(self):
        pass

    def create_db(self):
        conn = sqlite3.connect('SmartMatch');

        cursor = conn.cursor()

        cursor.execute('''
                CREATE TABLE IF NOT EXISTS user(
                    [id] INTEGER PRIMARY KEY AUTOINCREMENT, 
                    [name] TEXT, 
                    [email] TEXT,
                    [pwd] TEXT,
                    [dob] DATE,
                    [academicArea] TEXT,
                    [academicDegree] TEXT,
                    [picture] BLOB,
                    [user_interests] INTEGER,
                    FOREIGN KEY (user_interests) REFERENCES interests (id)
                );
                ''')


        cursor.execute('''
                    CREATE TABLE IF NOT EXISTS interests
                    ([id] INTEGER PRIMARY KEY AUTOINCREMENT,
                    [Mathematics] BOOLEAN,
                    [Portuguese] BOOLEAN,
                    [English] BOOLEAN,
                    [German] BOOLEAN,
                    [Physics] BOOLEAN,
                    [Chemistry] BOOLEAN,
                    [Economics] BOOLEAN,
                    [Biology] BOOLEAN,
                    [Geology] BOOLEAN,
                    [History] BOOLEAN,
                    [Computing] BOOLEAN,
                    [Engineering] BOOLEAN,
                    [Medicine] BOOLEAN,
                    [Nursing] BOOLEAN,
                    [Pharmacy] BOOLEAN,
                    [Education] BOOLEAN,
                    [Law] BOOLEAN,
                    [Psychology] BOOLEAN,
                    [Politics] BOOLEAN,
                    [Sports] BOOLEAN
                    );
                    ''')


        cursor.execute('''
                    INSERT INTO user (name, email, pwd, dob, academicArea, academicDegree, picture, user_interests)
                        VALUES
                        ('gonçalo', 'aaa@gmail.com', '1234', 2002-07-01, 'Computer Science', 3, NULL, 1);''')


        cursor.execute('''
                    SELECT * FROM user;''')                     


        conn.commit()


    def exec_query(self):
        conn = sqlite3.connect('SmartMatch');
        cursor = conn.cursor()

        cursor.execute('''
                    SELECT * FROM user;''')
        

    def print_results(self):
        conn = sqlite3.connect('SmartMatch');
        cursor = conn.cursor()
        
        df = pd.DataFrame(cursor.fetchall(), columns=['id', 'name','email','pwd','dob', 'academicArea', 'academicDegree', 'picture', 'user_interests'])
        print(df)


Database()