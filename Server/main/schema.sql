CREATE TABLE artist(
  id SERIAL PRIMARY KEY,
  artist_name VARCHAR(200) NOT NULL,
  real_name VARCHAR(200),
  members artist.id[] DEFAULT ARRAY[]::artist.id[],
  debut_song_id REFERENCES song(id),
  birthdate DATE
);

CREATE TABLE album(
  id SERIAL PRIMARY KEY,
  artist_id REFERENCES artist(id) NOT NULL,
  members artist.id[] DEFAULT ARRAY[]::artist.id[],
  album_title VARCHAR(200) NOT NULL,
  release_date DATE,
  released BOOLEAN,
);

CREATE TABLE song(
  id SERIAL PRIMARY KEY,
  album_id REFERENCES album(id) NOT NULL,
  song_title VARCHAR(200) NOT NULL,
  track_number INT,
  ft_artist artist.id[] DEFAULT ARRAY[]::artist.id[],
  lyrics artist.id[] DEFAULT ARRAY[]::artist.id[],
  composer artist.id[] DEFAULT ARRAY[]::artist.id[],
  arrangement artist.id[] DEFAULT ARRAY[]::artist.id[],
);