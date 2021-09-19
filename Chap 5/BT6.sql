CREATE DATABASE advertisement;

USE advertisement;

CREATE TABLE information (
	path_image VARCHAR(50),
    description VARCHAR(2000),
    start_tiime date
);

INSERT into information (path_image, description, start_tiime) VALUES ("./img1.png", "this is advertisement 1", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img2.png", "this is advertisement 2", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img3.png", "this is advertisement 3", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img4.png", "this is advertisement 4", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img5.png", "this is advertisement 5", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img6.png", "this is advertisement 6", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img7.png", "this is advertisement 7", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img8.png", "this is advertisement 8", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img9.png", "this is advertisement 9", "2000-01-01");
INSERT into information (path_image, description, start_tiime) VALUES ("./img10.png", "this is advertisement 10", "2000-01-01");

SELECT * FROM information ORDER BY RAND() LIMIT 1;
