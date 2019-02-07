DROP DATABASE IF EXISTS oauth;
CREATE database oauth;
USE oauth;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(200) 
);

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  users_id INT REFERENCES users(id),
  todo VARCHAR(1000),
  time DATETIME
);
-- insert test values
INSERT INTO users (userId) VALUES ("aaaaaa"), ("bbbbbb"), ("cccccc");
INSERT INTO todos (users_id, todo, time) VALUES (1, "this is my first todo", STR_TO_DATE("2019-02-01T01:00:00Z","%Y-%m-%dT%TZ"));
