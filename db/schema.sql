### Pet Safe Tracker schema

DROP DATABASE IF EXISTS petsafetracker_db;
CREATE DATABASE petsafetracker_db;
USE petsafetracker_db;

### Passport Login Table???
-- CREATE TABLE Login
-- (
-- 	id int AUTO_INCREMENT NOT NULL,
--     Email VARCHAR(50) NOT NULL, 
--     UserPassword VARCHAR(20) NOT NULL,
--     FirstName VARCHAR(30) NOT NULL,
--     LastName VARCHAR(30) NOT NULL,
--     PRIMARY KEY (id)
-- );

CREATE TABLE UserTable
(
	id int AUTO_INCREMENT NOT NULL,
	UserName VARCHAR(255) NOT NULL,
	UserPassword VARCHAR(20) NOT NULL,
    FirstName VARCHAR(30) NOT NULL,
    LastName VARCHAR(30) NOT NULL,
    PhoneNum numeric(10) NOT NULL, 
    Email VARCHAR(50) NOT NULL, 
    ZipCode CHAR(5) NOT NULL,
    Role BOOLEAN DEFAULT TRUE,  
    createdAt TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);


CREATE TABLE PetProfile
(
	id int AUTO_INCREMENT NOT NULL,
    PetName VARCHAR(255) NOT NULL,
    PetType VARCHAR(255) NOT NULL, 
    Food VARCHAR(255) NOT NULL,
    FoodAmt VARCHAR(255),
    VetInfo VARCHAR(255),
    Comments text(255),
    createdAt TIMESTAMP DEFAULT now(),
    FOREIGN KEY (id) REFERENCES UserTable(id),
	PRIMARY KEY (id)
);


CREATE TABLE Trip
(
	id int AUTO_INCREMENT NOT NULL,
	TripName VARCHAR(255) NOT NULL,
	FromDate DATE NOT NULL, 
    ToDate DATE NOT NULL, 
    EmergencyContact VARCHAR(255) NOT NULL, 
    Comments TEXT(255), 
    createdAt TIMESTAMP DEFAULT now(),
    FOREIGN KEY (id) REFERENCES UserTable(id),
    FOREIGN KEY (id) REFERENCES PetProfile(id),
	PRIMARY KEY (id)
);


CREATE TABLE TripCheckIn
(
	id int AUTO_INCREMENT NOT NULL,
    Comments TEXT(255),
    createdAt TIMESTAMP DEFAULT now(),
    FOREIGN KEY (id) REFERENCES Trip(id),
	PRIMARY KEY (id)
);


SELECT * FROM petsafetracker_db.UserTable;
SELECT * FROM petsafetracker_db.PetProfile;
SELECT * FROM petsafetracker_db.Trip;
SELECT * FROM petsafetracker_db.TripCheckIn;

