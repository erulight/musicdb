CREATE TABLE artists(
  id SERIAL PRIMARY KEY,
  artist_name VARCHAR(200) NOT NULL,
  real_name VARCHAR(200),
  member_of INT REFERENCES artist(id),
  birthdate DATE
);

CREATE TABLE albums(
  id SERIAL PRIMARY KEY,
  artist_id INT REFERENCES artist(id) NOT NULL,
  members INT[] DEFAULT ARRAY[]::INT[],
  album_title VARCHAR(200) NOT NULL,
  release_date DATE,
  released BOOLEAN
);

CREATE TABLE songs(
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES album(id) NOT NULL,
  song_title VARCHAR(200) NOT NULL,
  track_number INT,
  ft_artist INT[] DEFAULT ARRAY[]::INT[],
  lyrics INT[] DEFAULT ARRAY[]::INT[],
  composer INT[] DEFAULT ARRAY[]::INT[],
  arrangement INT[] DEFAULT ARRAY[]::INT[]
);