CREATE TABLE artists(
  id INT PRIMARY KEY NOT NULL,
  artist_name VARCHAR(200) NOT NULL,
  real_name VARCHAR(200),
  member_of INT REFERENCES artists(id),
  birthdate DATE
);

CREATE TABLE albums(
  id INT PRIMARY KEY NOT NULL,
  artist_id INT REFERENCES artists(id),
  members INT[] DEFAULT ARRAY[]::INT[],
  album_title VARCHAR(200) NOT NULL,
  release_date DATE,
  released BOOLEAN
);
/*
CREATE TABLE songs(
  id INT PRIMARY KEY NOT NULL,
  album_id INT REFERENCES albums(id),
  song_title VARCHAR(200) NOT NULL,
  track_number INT,
  ft_artist INT[] DEFAULT ARRAY[]::INT[],
  lyrics INT[] DEFAULT ARRAY[]::INT[],
  composer INT[] DEFAULT ARRAY[]::INT[],
  arrangement INT[] DEFAULT ARRAY[]::INT[]
);
*/

CREATE TABLE songs(
  id INT PRIMARY KEY NOT NULL,
  album_id INT REFERENCES albums(id),
  song_title VARCHAR(200) NOT NULL,
  track_number INT,
  ft_artist INT REFERENCES artists(id),
  lyrics INT REFERENCES artists(id),
  composer INT REFERENCES artists(id),
  arrangement INT REFERENCES artists(id)
);