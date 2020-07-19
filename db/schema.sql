DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

-- tells mysql that we are going to start interacting with library_db
USE notes_db;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  body VARCHAR(255) NOT NULL
);