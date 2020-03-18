const pool = require('../db')

/*
  TEST DATA
*/

//Test Tracks

const track1 = {
  id: 1,
  title: 'First Song',
  album_id: 1,
  disc: 1,
  number: 1,
  song_id: 1
}

const track2 = {
  id: 2,
  title: 'Second Song',
  album_id: 1,
  disc: 1,
  number: 2,
  song_id: 2
}

const track3 = {
  id: 3,
  title: 'Third Song',
  album_id: 1,
  disc: 2,
  number: 1,
  song_id: 3
}

const track4 = {
  id: 4,
  title: 'Fourth Song',
  album_id: 1,
  disc: 2,
  number: 2,
  song_id: 4
}

const track5 = {
  id: 5,
  title: 'Fifth Song',
  album_id: 2,
  disc: 1,
  number: 1,
  song_id: 5
}

const track6 = {
  id: 6,
  title: 'Sixth Song',
  album_id: 2,
  disc: 1,
  number: 2,
  song_id: 6
}

const track7 = {
  id: 7,
  title: 'Seventh Song',
  album_id: 2,
  disc: 1,
  number: 3,
  song_id: 7
}

const track8 = {
  id: 8,
  title: 'Eighth Song',
  album_id: 2,
  disc: 1,
  number: 4,
  song_id: 8
}

const track9 = {
  id: 9,
  title: 'Ninth Song',
  album_id: 2,
  disc: 1,
  number: 5,
  song_id: 9
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
  pool.query('DELETE FROM tracks WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('6'); insertTracks() })
}
const insertTracks = () => {
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track1.id, track1.title, track1.album_id, track1.disc, track1.number, track1.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track2.id, track2.title, track2.album_id, track2.disc, track2.number, track2.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track3.id, track3.title, track3.album_id, track3.disc, track3.number, track3.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track4.id, track4.title, track4.album_id, track4.disc, track4.number, track4.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track5.id, track5.title, track5.album_id, track5.disc, track5.number, track5.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track6.id, track6.title, track6.album_id, track6.disc, track6.number, track6.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track7.id, track7.title, track7.album_id, track7.disc, track7.number, track7.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track8.id, track8.title, track8.album_id, track8.disc, track8.number, track8.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO tracks (id, title, album_id, disc, number, song_id)
              Values ($1, $2, $3, $4, $5, $6)`, [track9.id, track9.title, track9.album_id, track9.disc, track9.number, track9.song_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()