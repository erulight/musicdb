const pool = require('../db')

// TEST DATA

//Test: Test Songs Albums

const songalbum1 = {
  id: 1,
  song_id: 1,
  album_id: 1
}

const songalbum2 = {
  id: 2,
  song_id: 2,
  album_id: 1
}

const songalbum3 = {
  id: 3,
  song_id: 3,
  album_id: 1
}

const songalbum4 = {
  id: 4,
  song_id: 4,
  album_id: 1
}

const songalbum5 = {
  id: 5,
  song_id: 5,
  album_id: 2
}

const songalbum6 = {
  id: 6,
  song_id: 6,
  album_id: 2
}

const songalbum7 = {
  id: 7,
  song_id: 7,
  album_id: 2
}

const songalbum8 = {
  id: 8,
  song_id: 8,
  album_id: 2
}

const songalbum9 = {
  id: 9,
  song_id: 9,
  album_id: 2
}

//Clear past data
const clearData = () => {  clearSongsCredits() }
const clearSongsCredits = () => {
  pool.query('DELETE FROM songs_credits WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('11'); clearSongsAlbums() })
}
const clearSongsAlbums = () => {
  pool.query('DELETE FROM songs_albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('10'); insertSongsAlbums() })
}
const insertSongsAlbums = () => {
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum1.id, songalbum1.song_id, songalbum1.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum2.id, songalbum2.song_id, songalbum2.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum3.id, songalbum3.song_id, songalbum3.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum4.id, songalbum4.song_id, songalbum4.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum5.id, songalbum5.song_id, songalbum5.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum6.id, songalbum6.song_id, songalbum6.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum7.id, songalbum7.song_id, songalbum7.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum8.id, songalbum8.song_id, songalbum8.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_albums (id, song_id, album_id)
            Values ($1, $2, $3)`, [songalbum9.id, songalbum9.song_id, songalbum9.album_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()