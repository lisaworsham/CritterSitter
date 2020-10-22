SELECT * FROM petsafetracker_db.User;
INSERT INTO petsafetracker_db.User (Email, UserPassword, FirstName, LastName, PhoneNum, ZipCode, PetOwner, PetSitter, createdAt, updatedAt) 
	VALUES ('meg_griff@toon.com', 'megg', 'Meg', 'Griffin', 1234567890, 77090, false, true, '2020-10-21 02:04:58', '2020-10-21 02:04:58');

INSERT INTO petsafetracker_db.User (Email, UserPassword, FirstName, LastName, PhoneNum, ZipCode, PetOwner, PetSitter, createdAt, updatedAt) 
	VALUES ('dalmationlove@dis.org', 'puppies', 'Cruella', 'de Vil', 1234567890, 77101, false, true, '2020-10-20 02:04:58', '2020-10-20 02:04:58');