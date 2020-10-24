ALTER TABLE theuse
ALTER COLUMN user_id int NOT NULL AUTO_INCREMENT;

SELECT user_id, firstName, lastName, emailAddress
    from theUser;