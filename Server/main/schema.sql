CREATE TABLE record_labels(
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(200)
);

CREATE TABLE artists(
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(200) NOT NULL,
  real_name VARCHAR(200),
  birthdate DATE
);

CREATE TABLE members(
  id INT PRIMARY KEY NOT NULL,
  member_of_id INT REFERENCES artists(id) NOT NULL,
  artist_id INT REFERENCES artists(id),
  name VARCHAR(200),
  position VARCHAR(200)
);

CREATE TABLE albums(
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  artist_id INT REFERENCES artists(id),
  release_date DATE
);

CREATE TABLE songs(
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  artist_id INT REFERENCES artists(id)
);

CREATE TABLE tracks(
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  album_id INT REFERENCES albums(id),
  disc INT,
  number INT,
  song_id INT REFERENCES songs(id)
);

CREATE TABLE artists_labels(
  id INT PRIMARY KEY NOT NULL,
  artist_id INT REFERENCES artists(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE albums_labels(
  id INT PRIMARY KEY NOT NULL,
  album_id INT REFERENCES albums(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE songs_labels(
  id INT PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE songs_albums(
  id INT PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  album_id INT REFERENCES albums(id)
);

CREATE TABLE songs_credits(
  id INT PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  type VARCHAR(200),
  artist_id INT REFERENCES artists(id)
);

CREATE TABLE new_artists(
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(200),
  real_name VARCHAR(200),
  birthdate DATE,
  is_group BOOLEAN
);

CREATE TABLE new_members(
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(200),
  member_of_id INT,
  position VARCHAR(200)
);

CREATE TABLE new_albums(
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(200),
  artist_id INT,
  release_date DATE
);

CREATE TABLE new_tracks(
  id INT PRIMARY KEY NOT NULL,

);