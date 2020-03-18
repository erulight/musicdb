const pool = require('../db')

// TEST DATA

//Test: Songs Record Labels

const songlabel1 = {
  id: 1,
  song_id: 1,
  record_label_id: 2
}

const songlabel2 = {
  id: 2,
  song_id: 2,
  record_label_id: 2
}

const songlabel3 = {
  id: 3,
  song_id: 3,
  record_label_id: 2
}

const songlabel4 = {
  id: 4,
  song_id: 4,
  record_label_id: 2
}

const songlabel5 = {
  id: 5,
  song_id: 5,
  record_label_id: 1
}

const songlabel6 = {
  id: 6,
  song_id: 6,
  record_label_id: 1
}

const songlabel7 = {
  id: 7,
  song_id: 7,
  record_label_id: 1
}

const songlabel8 = {
  id: 8,
  song_id: 8,
  record_label_id: 1
}

const songlabel9 = {
  id: 9,
  song_id: 9,
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
  pool.query('DELETE FROM songs_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('9'); insertSongsLabels() })
}
const insertSongsLabels = () => {
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel1.id, songlabel1.song_id, songlabel1.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel2.id, songlabel2.song_id, songlabel2.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel3.id, songlabel3.song_id, songlabel3.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel4.id, songlabel4.song_id, songlabel4.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel5.id, songlabel5.song_id, songlabel5.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel6.id, songlabel6.song_id, songlabel6.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel7.id, songlabel7.song_id, songlabel7.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel8.id, songlabel8.song_id, songlabel8.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_labels (id, song_id, record_label_id)
            Values ($1, $2, $3)`, [songlabel9.id, songlabel9.song_id, songlabel9.record_label_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()