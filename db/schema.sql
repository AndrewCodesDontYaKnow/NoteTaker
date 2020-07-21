DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

USE notes_db;

CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  text VARCHAR(255) NOT NULL
);