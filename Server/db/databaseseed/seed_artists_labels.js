const pool = require('../db')

// TEST DATA

//Test: Artists Record Labels

const artistlabel1 = {
  id: 1,
  artist_id: 1,
  record_label_id: 2
}

const artistlabel2 = {
  id: 2,
  artist_id: 2,
  record_label_id: 2
}

const artistlabel3 = {
  id: 3,
  artist_id: 3,
  record_label_id: 2
}

const artistlabel4 = {
  id: 4,
  artist_id: 4,
  record_label_id: 2
}

const artistlabel5 = {
  id: 5,
  artist_id: 5,
  record_label_id: 1
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
  pool.query('DELETE FROM artists_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('7'); insertArtistsLabels() })
}
const insertArtistsLabels = () => {
  pool.query(`INSERT INTO artists_labels (id, artist_id, record_label_id)
            Values ($1, $2, $3)`, [artistlabel1.id, artistlabel1.artist_id, artistlabel1.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO artists_labels (id, artist_id, record_label_id)
            Values ($1, $2, $3)`, [artistlabel2.id, artistlabel2.artist_id, artistlabel2.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO artists_labels (id, artist_id, record_label_id)
            Values ($1, $2, $3)`, [artistlabel3.id, artistlabel3.artist_id, artistlabel3.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO artists_labels (id, artist_id, record_label_id)
            Values ($1, $2, $3)`, [artistlabel4.id, artistlabel4.artist_id, artistlabel4.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO artists_labels (id, artist_id, record_label_id)
            Values ($1, $2, $3)`, [artistlabel5.id, artistlabel5.artist_id, artistlabel5.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()