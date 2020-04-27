const pool = require('../db')

// TEST DATA

//Test Songs

const song1 = {
  id: 1,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'First Song',
  release_date: 'January 1, 2020'
}

const song2 = {
  id: 2,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Second Song',
  release_date: 'January 1, 2020'
}

const song3 = {
  id: 3,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Third Song',
  release_date: 'January 1, 2020'
}

const song4 = {
  id: 4,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Fourth Song',
  release_date: 'January 1, 2020'
}

const song5 = {
  id: 5,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Fifth Song',
  release_date: 'February 1, 2020'
}

const song6 = {
  id: 6,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Sixth Song',
  release_date: 'February 1, 2020'
}

const song7 = {
  id: 7,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Seventh Song',
  release_date: 'February 1, 2020'
}

const song8 = {
  id: 8,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Eighth Song',
  release_date: 'February 1, 2020'
}

const song9 = {
  id: 9,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'Ninth Song',
  release_date: 'February 1, 2020'
}

//Clear past data
const clearData = () => {  clearSongsCredits() }
const clearSongsCredits = () => {
  pool.query('DELETE FROM songs_credits WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('11'); clearSongsAlbums() })
}
const clearSongsAlbums = () => {
  pool.query('DELETE FROM songs_albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('10'); clearSongsLabels() })
}
const clearSongsLabels = () => {
  pool.query('DELETE FROM songs_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('9'); clearAlbumsLabels() })
}
const clearAlbumsLabels = () => {
  pool.query('DELETE FROM albums_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('8'); clearArtistsLabels() })
}
const clearArtistsLabels = () => {
  pool.query('DELETE FROM artists_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('7'); clearTracks() })
}
const clearTracks = () => {
  pool.query('DELETE FROM tracks WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('6'); clearSongs() })
}
const clearSongs = () => {
  pool.query('DELETE FROM songs WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('5'); insertSongs() })
}
const insertSongs = () => {
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song1.id, song1.artist_id, song1.title, song1.release_date, song1.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song2.id, song2.artist_id, song2.title, song2.release_date, song2.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song3.id, song3.artist_id, song3.title, song3.release_date, song3.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song4.id, song4.artist_id, song4.title, song4.release_date, song4.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song5.id, song5.artist_id, song5.title, song5.release_date, song5.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song6.id, song6.artist_id, song6.title, song6.release_date, song6.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song7.id, song7.artist_id, song7.title, song7.release_date, song7.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song8.id, song8.artist_id, song8.title, song8.release_date, song8.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [song9.id, song9.artist_id, song9.title, song9.release_date, song9.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()