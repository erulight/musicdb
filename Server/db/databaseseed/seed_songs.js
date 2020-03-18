const pool = require('../db')

// TEST DATA

//Test Songs

const song1 = {
  id: 1,
  artist_id: 5,
  title: 'First Song'
}

const song2 = {
  id: 2,
  artist_id: 5,
  title: 'Second Song'
}

const song3 = {
  id: 3,
  artist_id: 5,
  title: 'Third Song'
}

const song4 = {
  id: 4,
  artist_id: 5,
  title: 'Fourth Song'
}

const song5 = {
  id: 5,
  artist_id: 5,
  title: 'Fifth Song'
}

const song6 = {
  id: 6,
  artist_id: 5,
  title: 'Sixth Song'
}

const song7 = {
  id: 7,
  artist_id: 5,
  title: 'Seventh Song'
}

const song8 = {
  id: 8,
  artist_id: 5,
  title: 'Eighth Song'
}

const song9 = {
  id: 9,
  artist_id: 5,
  title: 'Ninth Song'
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
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song1.id, song1.artist_id, song1.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song2.id, song2.artist_id, song2.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song3.id, song3.artist_id, song3.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song4.id, song4.artist_id, song4.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song5.id, song5.artist_id, song5.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song6.id, song6.artist_id, song6.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song7.id, song7.artist_id, song7.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song8.id, song8.artist_id, song8.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, artist_id, title)
            Values ($1, $2, $3)`, [song9.id, song9.artist_id, song9.title],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()