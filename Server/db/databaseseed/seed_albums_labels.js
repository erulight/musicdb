const pool = require('../db')

// TEST DATA

//Test: Albums Record Labels

const albumlabel1 = {
  id: 1,
  album_id: 1,
  record_label_id: 2
}

const albumlabel2 = {
  id: 2,
  album_id: 2,
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
  pool.query('DELETE FROM albums_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('8'); insertAlbumLabels() })
}
const insertAlbumLabels = () => {
  pool.query(`INSERT INTO albums_labels (id, album_id, record_label_id)
            Values ($1, $2, $3)`, [albumlabel1.id, albumlabel1.album_id, albumlabel1.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO albums_labels (id, album_id, record_label_id)
            Values ($1, $2, $3)`, [albumlabel2.id, albumlabel2.album_id, albumlabel2.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()