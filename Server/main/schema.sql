CREATE TABLE record_labels(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(200)
);

CREATE TABLE artists(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(200) NOT NULL,
  real_name VARCHAR(200),
  birthdate DATE,
  active_status BOOLEAN,
  is_group BOOLEAN
);

CREATE TABLE members(
  id SERIAL PRIMARY KEY NOT NULL,
  member_of_id INT REFERENCES artists(id) NOT NULL,
  artist_id INT REFERENCES artists(id),
  name VARCHAR(200),
  position VARCHAR(200)
);

CREATE TABLE albums(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE
);

CREATE TABLE songs(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE
);

CREATE TABLE tracks(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(200) NOT NULL,
  album_id INT REFERENCES albums(id),
  disc INT,
  number INT,
  song_id INT REFERENCES songs(id)
);

CREATE TABLE artists_labels(
  id SERIAL PRIMARY KEY NOT NULL,
  artist_id INT REFERENCES artists(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE albums_labels(
  id SERIAL PRIMARY KEY NOT NULL,
  album_id INT REFERENCES albums(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE songs_labels(
  id SERIAL PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  record_label_id INT REFERENCES record_labels(id)
);

CREATE TABLE songs_albums(
  id SERIAL PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  album_id INT REFERENCES albums(id)
);

CREATE TABLE songs_credits(
  id SERIAL PRIMARY KEY NOT NULL,
  song_id INT REFERENCES songs(id),
  type VARCHAR(200),
  name VARCHAR(200),
  artist_id INT REFERENCES artists(id)
);

CREATE TABLE new_artists(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(200),
  real_name VARCHAR(200),
  birthdate DATE,
  is_group BOOLEAN,
  active_status BOOLEAN,
  date_created TIMESTAMP
);

CREATE TABLE new_members(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  member_of_id INT REFERENCES artists(id),
  position VARCHAR(200),
  date_created TIMESTAMP,
  artist_id INT REFERENCES artists(id)
);

CREATE TABLE new_albums(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE,
  date_created TIMESTAMP
);

CREATE TABLE new_tracks(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  album_id INT REFERENCES albums(id),
  disc INT,
  number INT,
  song_id INT REFERENCES songs(id)
);

CREATE TABLE new_songs(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE,
  album_id INT REFERENCES albums(id),
  album_title VARCHAR(200)
);

CREATE TABLE new_songs_credits(
  id SERIAL PRIMARY KEY,
  song_id INT REFERENCES songs(id),
  type VARCHAR(200),
  name VARCHAR(200),
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200)
);

CREATE TABLE edit_artists(
  id SERIAL PRIMARY KEY,
  artist_id INT REFERENCES artists(id),
  name VARCHAR(200),
  real_name VARCHAR(200),
  birthdate DATE,
  is_group BOOLEAN,
  active_status BOOLEAN,
  date_created TIMESTAMP
);

CREATE TABLE edit_members(
  id SERIAL PRIMARY KEY,
  member_of_id INT REFERENCES artists(id),
  member_id INT REFERENCES members(id),
  artist_id INT REFERENCES artists(id),
  name VARCHAR(200),
  position VARCHAR(200),
  date_created TIMESTAMP
);

CREATE TABLE edit_albums(
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  title VARCHAR(200),
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE,
  date_created TIMESTAMP
);

CREATE TABLE edit_tracks(
  id SERIAL PRIMARY KEY,
  track_id INT REFERENCES tracks(id),
  album_id INT REFERENCES albums(id),
  title VARCHAR(200) NOT NULL,
  disc INT,
  number INT,
  song_id INT REFERENCES songs(id)
);

CREATE TABLE edit_songs(
  id SERIAL PRIMARY KEY,
  song_id INT REFERENCES songs(id),
  title VARCHAR(200),
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  release_date DATE,
  date_created TIMESTAMP
);

CREATE TABLE edit_credits(
  id SERIAL PRIMARY KEY,
  song_id INT REFERENCES songs(id),
  type VARCHAR(200),
  name VARCHAR(200),
  artist_id INT REFERENCES artists(id),
  artist_name VARCHAR(200),
  credit_id INT REFERENCES songs_Credits(id)
);