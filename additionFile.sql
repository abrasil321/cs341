INSERT INTO plan (goal, descrip)
    VALUES ('build muscle', 'low Carb diet with high protein');

INSERT INTO plan (goal, descrip)
    VALUES ('gain Weight', 'medium carbo diet, high protein and cardio');

INSERT INTO plan (goal, descrip)
    VALUES ('mantain Weight', 'Cicle of carbs with low/zero carb, high protein and high fat');


SELECT goal, descrip
    from plan;

SELECT user_id, firstName, lastName, emailAddress
    from theUser;