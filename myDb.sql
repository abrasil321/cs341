-- DATABASE TABLES
CREATE TABLE plan (
    goal            varchar(80)         NOT NULL        PRIMARY KEY,
    descrip         varchar(255)        
);

CREATE TABLE theUser (
    user_id         int                 NOT NULL        PRIMARY KEY,
    firstName       varchar(80)         NOT NULL,
    lastName        varchar(80),
    emailAddress    varchar(80)         NOT NULL
);

CREATE TABLE meal (
    id              int                 NOT NULL        PRIMARY KEY,
    meal            varchar(80)         NOT NULL,
    goal            varchar(80),
    plan            varchar(255),
    FOREIGN KEY (id) REFERENCES theUser (user_id),
    FOREIGN KEY (goal) REFERENCES plan (goal)
);



-- DATABASE UPDATE
INSERT INTO plan (goal, descrip)
    VALUES ('Lose Weight', 'description example');

INSERT INTO theUser (user_id, firstName, lastName, emailAddress)
    VALUES (00, 'Alex', 'Brasil', 'bra17001@byui.edu');

INSERT INTO meal (id, meal, goal, plan)
    VALUES (00, 'Chiken, Beef, Eggs', 'Lose Weight', 'High Protein and Low Carbs');


    
-- DATABASE RETRIEVAL
SELECT goal, descrip
    from plan;

SELECT user_id, firstName, lastName, emailAddress
    from theUser;

SELECT id, meal, goal, plan
    from meal;



