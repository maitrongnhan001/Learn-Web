CREATE DATABASE chat;

USE chat;

CREATE TABLE chat (
    username VARCHAR(50),
    message VARCHAR(2000)
);

INSERT INTO chat (username, message) VALUES ("Use 1", "Message 1");
INSERT INTO chat (username, message) VALUES ("Use 2", "Message 2");
INSERT INTO chat (username, message) VALUES ("Use 3", "Message 3");
INSERT INTO chat (username, message) VALUES ("Use 4", "Message 4");
INSERT INTO chat (username, message) VALUES ("Use 5", "Message 5");
INSERT INTO chat (username, message) VALUES ("Use 6", "Message 6");
INSERT INTO chat (username, message) VALUES ("Use 7", "Message 7");
INSERT INTO chat (username, message) VALUES ("Use 8", "Message 8");
INSERT INTO chat (username, message) VALUES ("Use 9", "Message 9");
INSERT INTO chat (username, message) VALUES ("Use 10", "Message 10");
INSERT INTO chat (username, message) VALUES ("Use 11", "Message 11");
INSERT INTO chat (username, message) VALUES ("Use 12", "Message 12");
INSERT INTO chat (username, message) VALUES ("Use 13", "Message 13");
INSERT INTO chat (username, message) VALUES ("Use 14", "Message 14");
INSERT INTO chat (username, message) VALUES ("Use 15", "Message 15");
INSERT INTO chat (username, message) VALUES ("Use 16", "Message 16");
INSERT INTO chat (username, message) VALUES ("Use 17", "Message 17");
INSERT INTO chat (username, message) VALUES ("Use 18", "Message 18");
INSERT INTO chat (username, message) VALUES ("Use 19", "Message 19");
INSERT INTO chat (username, message) VALUES ("Use 20", "Message 20");

SELECT * FROM chat LIMIT 10;