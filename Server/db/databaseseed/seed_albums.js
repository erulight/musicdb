const pool = require('../db')

/*
  TEST DATA
*/

//Test Albums


const album1 = {
  id: 1,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'The First Album',
  release_date: 'January 1, 2020',
}

const album2 = {
  id: 2,
  artist_id: 5,
  artist_name: 'Band One',
  title: 'The Second Album',
  release_date: 'February 1, 2020',
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
  pool.query('DELETE FROM songs WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('5'); clearAlbums() })
}
const clearAlbums = () => {
  pool.query('DELETE FROM albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('4'); insertAlbums() })
}

const insertAlbums = () => {
  pool.query(`INSERT INTO albums (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [album1.id, album1.artist_id, album1.title, album1.release_date, album1.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO albums (id, artist_id, title, release_date, artist_name)
            Values ($1, $2, $3, $4, $5)`, [album2.id, album2.artist_id, album2.title, album2.release_date, album2.artist_name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
clearData()