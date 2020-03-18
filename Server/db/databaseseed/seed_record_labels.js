const pool = require('../db')

//Test Data

// Test Labels

const label1 = {
  id: 1,
  name: 'Label One'
}

const label2 = {
  id: 2,
  name: 'Label Two'
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
  pool.query('DELETE FROM albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('4'); clearMembers() })
}
const clearMembers = () => {
  pool.query('DELETE FROM members WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('3'); clearArtists() })
}
const clearArtists = () => {
  pool.query('DELETE FROM artists WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('2'); clearLabels() })
}
const clearLabels = () => {
  pool.query('DELETE FROM record_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('1'); insertLabels() })
}

//Insert New Data
const insertLabels = () => {
  pool.query(`INSERT INTO record_labels (id, name)
            Values ($1, $2)`, [label1.id, label1.name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO record_labels (id, name)
    Values ($1, $2)`, [label2.id, label2.name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
//Call Clear Data
clearData()