requete sqlite :


create table users (
    id integer primary key AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);

create table edusign (
    id integer PRIMARY KEy AUTOINCREMENT,
    user_id INTEGER, 
    created_at DATETIME NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO users (firstname, lastname, email)
VALUES
('Ada', 'Lovelace', 'ada@test.fr'),
('Béatrice', 'Worsley', 'bea@test.fr'),
('Bella', 'Guerin', 'bella@test.fr'),
('Barbara', 'Chase', 'barbara@test.fr');

select * from users 

select * from users WHERE firstname like 'b%'

select count(*) from users

select count(*) from users where firstname like 'b%'

select firstname from users 


INSERT INTO edusign (user_id, created_at)
VALUES
(1, '2024-05-30 09:30:00')

INSERT INTO edusign (user_id, created_at)
VALUES
(3, '2024-05-30 09:30:00')

INSERT INTO edusign (user_id, created_at)
SELECT id, '2024-09-01 09:30:00'
from users 

select * from edusign ORDER BY created_at DESC, user_id ASC

select * from edusign where created_at = '2024-05-30 09:30:00'