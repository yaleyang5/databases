CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(20)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(144),
  user_id INT,
  room_id INT,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  FOREIGN KEY (room_id)
    REFERENCES rooms(id)
);

CREATE TABLE friends (
  user1_id INT,
  user2_id INT,
  FOREIGN KEY (user1_id)
    REFERENCES users(id),
  FOREIGN KEY (user2_id)
    REFERENCES users(id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

