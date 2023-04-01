import sqlite3
import pandas as pd


def create_db():
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
                [location] TEXT,
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

    conn.commit()

