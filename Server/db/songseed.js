const pool = require('./db')

/*
  TEST DATA
*/

//Test Songs

const song1 = {
  id: 1,
  album_id: 1,
  song_title: 'The First Song',
  track_number: 1,
  ft_artist: 2,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song2 = {
  id: 2,
  album_id: 1,
  song_title: 'The Second Song',
  track_number: 2,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song3 = {
  id: 3,
  album_id: 1,
  song_title: 'The Third Song',
  track_number: 3,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song4 = {
  id: 4,
  album_id: 1,
  song_title: 'The Fourth Song',
  track_number: 4,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song5 = {
  id: 5,
  album_id: 1,
  song_title: 'The Fifth Song',
  track_number: 5,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song6 = {
  id: 6,
  album_id: 2,
  song_title: 'The Sixth Song',
  track_number: 1,
  ft_artist: null,
  lyrics: 1,
  composer: 4,
  arrangement: 4
}

const song7 = {
  id: 7,
  album_id: 2,
  song_title: 'The Seventh Song',
  track_number: 2,
  ft_artist: 5,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song8 = {
  id: 8,
  album_id: 2,
  song_title: 'The Eighth Song',
  track_number: 3,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song9 = {
  id: 9,
  album_id: 2,
  song_title: 'The Ninth Song',
  track_number: 4,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}

const song10 = {
  id: 10,
  album_id: 2,
  song_title: 'The Tenth Song',
  track_number: 5,
  ft_artist: null,
  lyrics: 3,
  composer: 4,
  arrangement: 4
}
/*
const song1 = {
  id: 1,
  album_id: 1,
  song_title: 'The First Song',
  track_number: 1,
  ft_artist: [2],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song2 = {
  id: 2,
  album_id: 1,
  song_title: 'The Second Song',
  track_number: 2,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song3 = {
  id: 3,
  album_id: 1,
  song_title: 'The Third Song',
  track_number: 3,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song4 = {
  id: 4,
  album_id: 1,
  song_title: 'The Fourth Song',
  track_number: 4,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song5 = {
  id: 5,
  album_id: 1,
  song_title: 'The Fifth Song',
  track_number: 5,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song6 = {
  id: 6,
  album_id: 2,
  song_title: 'The Sixth Song',
  track_number: 1,
  ft_artist: [null],
  lyrics: [1],
  composer: [4],
  arrangement: [4]
}

const song7 = {
  id: 7,
  album_id: 2,
  song_title: 'The Seventh Song',
  track_number: 2,
  ft_artist: [5],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song8 = {
  id: 8,
  album_id: 2,
  song_title: 'The Eighth Song',
  track_number: 3,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song9 = {
  id: 9,
  album_id: 2,
  song_title: 'The Ninth Song',
  track_number: 4,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}

const song10 = {
  id: 10,
  album_id: 2,
  song_title: 'The Tenth Song',
  track_number: 5,
  ft_artist: [null],
  lyrics: [3],
  composer: [4],
  arrangement: [4]
}
*/

//Clear past data
const clearData = () => {
  pool.query('DELETE FROM songs WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('1'); insertSongsData() })
}
const insertSongsData = () => {
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song1.id, song1.album_id, song1.song_title, song1.track_number, song1.ft_artist, song1.lyrics, song1.composer, song1.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song2.id, song2.album_id, song2.song_title, song2.track_number, song2.ft_artist, song2.lyrics, song2.composer, song2.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song3.id, song3.album_id, song3.song_title, song3.track_number, song3.ft_artist, song3.lyrics, song3.composer, song3.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song4.id, song4.album_id, song4.song_title, song4.track_number, song4.ft_artist, song4.lyrics, song4.composer, song4.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song5.id, song5.album_id, song5.song_title, song5.track_number, song5.ft_artist, song5.lyrics, song5.composer, song5.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song6.id, song6.album_id, song6.song_title, song6.track_number, song6.ft_artist, song6.lyrics, song6.composer, song6.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song7.id, song7.album_id, song7.song_title, song7.track_number, song7.ft_artist, song7.lyrics, song7.composer, song7.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song8.id, song8.album_id, song8.song_title, song8.track_number, song8.ft_artist, song8.lyrics, song8.composer, song8.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song9.id, song9.album_id, song9.song_title, song9.track_number, song9.ft_artist, song9.lyrics, song9.composer, song9.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs (id, album_id, song_title, track_number, ft_artist, lyrics, composer, arrangement)
            Values ($1, $2, $3, $4, $5, $6, $7, $8)`, [song10.id, song10.album_id, song10.song_title, song10.track_number, song10.ft_artist, song10.lyrics, song10.composer, song10.arrangement],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}

clearData()