const pool = require('../db')

// TEST DATA

// Test Song Credit

const songcredit1 = {
  id: 1,
  song_id: 1,
  type: 'lyricist',
  artist_id: 1
}

const songcredit2 = {
  id: 2,
  song_id: 1,
  type: 'lyricist',
  artist_id: 2
}

const songcredit3 = {
  id: 3,
  song_id: 1,
  type: 'composer',
  artist_id: 1
}

const songcredit4 = {
  id: 4,
  song_id: 1,
  type: 'composer',
  artist_id: 4
}

const songcredit5 = {
  id: 5,
  song_id: 1,
  type: 'arranger',
  artist_id: 4
}

const songcredit6 = {
  id: 6,
  song_id: 2,
  type: 'featured',
  artist_id: 1
}

const songcredit7 = {
  id: 7,
  song_id: 2,
  type: 'lyricist',
  artist_id: 2
}

const songcredit8 = {
  id: 8,
  song_id: 2,
  type: 'lyricist',
  artist_id: 3
}

const songcredit9 = {
  id: 9,
  song_id: 2,
  type: 'composer',
  artist_id: 2
}

const songcredit10 = {
  id: 10,
  song_id: 2,
  type: 'composer',
  artist_id: 4
}

const songcredit11 = {
  id: 11,
  song_id: 2,
  type: 'arranger',
  artist_id: 4
}

const songcredit12 = {
  id: 12,
  song_id: 3,
  type: 'lyricist',
  artist_id: 3
}

const songcredit13 = {
  id: 13,
  song_id: 3,
  type: 'composer',
  artist_id: 4
}

const songcredit14 = {
  id: 14,
  song_id: 3,
  type: 'arranger',
  artist_id: 4
}

const songcredit15 = {
  id: 15,
  song_id: 4,
  type: 'lyricist',
  artist_id: 1
}

const songcredit16 = {
  id: 16,
  song_id: 4,
  type: 'composer',
  artist_id: 4
}

const songcredit17 = {
  id: 17,
  song_id: 4,
  type: 'arranger',
  artist_id: 4
}

const songcredit18 = {
  id: 18,
  song_id: 5,
  type: 'lyricist',
  artist_id: 1
}

const songcredit19 = {
  id: 19,
  song_id: 5,
  type: 'composer',
  artist_id: 1
}

const songcredit20 = {
  id: 20,
  song_id: 5,
  type: 'composer',
  artist_id: 4
}

const songcredit21 = {
  id: 21,
  song_id: 5,
  type: 'arranger',
  artist_id: 4
}

const songcredit22 = {
  id: 22,
  song_id: 6,
  type: 'featured',
  artist_id: 1
}

const songcredit23 = {
  id: 23,
  song_id: 6,
  type: 'lyricist',
  artist_id: 2
}

const songcredit24 = {
  id: 24,
  song_id: 6,
  type: 'composer',
  artist_id: 3
}

const songcredit25 = {
  id: 25,
  song_id: 6,
  type: 'composer',
  artist_id: 4
}

const songcredit26 = {
  id: 26,
  song_id: 6,
  type: 'arranger',
  artist_id: 4
}

const songcredit27 = {
  id: 27,
  song_id: 7,
  type: 'lyricist',
  artist_id: 1
}

const songcredit28 = {
  id: 28,
  song_id: 7,
  type: 'composer',
  artist_id: 1
}

const songcredit29 = {
  id: 29,
  song_id: 7,
  type: 'composer',
  artist_id: 4
}

const songcredit30 = {
  id: 30,
  song_id: 7,
  type: 'arranger',
  artist_id: 4
}

const songcredit31 = {
  id: 31,
  song_id: 8,
  type: 'lyricist',
  artist_id: 1
}

const songcredit32 = {
  id: 32,
  song_id: 8,
  type: 'composer',
  artist_id: 1
}

const songcredit33 = {
  id: 33,
  song_id: 8,
  type: 'composer',
  artist_id: 4
}

const songcredit34 = {
  id: 34,
  song_id: 8,
  type: 'arranger',
  artist_id: 4
}

const songcredit35 = {
  id: 35,
  song_id: 9,
  type: 'lyricist',
  artist_id: 1
}

const songcredit36 = {
  id: 36,
  song_id: 9,
  type: 'lyricist',
  artist_id: 2
}

const songcredit37 = {
  id: 37,
  song_id: 9,
  type: 'composer',
  artist_id: 3
}

const songcredit38 = {
  id: 38,
  song_id: 9,
  type: 'arranger',
  artist_id: 4
}


//Clear past data
const clearData = () => {  clearSongsCredits() }
const clearSongsCredits = () => {
  pool.query('DELETE FROM songs_credits WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('11'); insertSongsCredits() })
}
const insertSongsCredits = () => {
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit1.id, songcredit1.song_id, songcredit1.type, songcredit1.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit2.id, songcredit2.song_id, songcredit2.type, songcredit2.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit3.id, songcredit3.song_id, songcredit3.type, songcredit3.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit4.id, songcredit4.song_id, songcredit4.type, songcredit4.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit5.id, songcredit5.song_id, songcredit5.type, songcredit5.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit6.id, songcredit6.song_id, songcredit6.type, songcredit6.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit7.id, songcredit7.song_id, songcredit7.type, songcredit7.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit8.id, songcredit8.song_id, songcredit8.type, songcredit8.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit9.id, songcredit9.song_id, songcredit9.type, songcredit9.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit10.id, songcredit10.song_id, songcredit10.type, songcredit10.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit11.id, songcredit11.song_id, songcredit11.type, songcredit11.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit12.id, songcredit12.song_id, songcredit12.type, songcredit12.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit13.id, songcredit13.song_id, songcredit13.type, songcredit13.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit14.id, songcredit14.song_id, songcredit14.type, songcredit14.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit15.id, songcredit15.song_id, songcredit15.type, songcredit15.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit16.id, songcredit16.song_id, songcredit16.type, songcredit16.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit17.id, songcredit17.song_id, songcredit17.type, songcredit17.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit18.id, songcredit18.song_id, songcredit18.type, songcredit18.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit19.id, songcredit19.song_id, songcredit19.type, songcredit19.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit20.id, songcredit20.song_id, songcredit20.type, songcredit20.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit21.id, songcredit21.song_id, songcredit21.type, songcredit21.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit22.id, songcredit22.song_id, songcredit22.type, songcredit22.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit23.id, songcredit23.song_id, songcredit23.type, songcredit23.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit24.id, songcredit24.song_id, songcredit24.type, songcredit24.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit25.id, songcredit25.song_id, songcredit25.type, songcredit25.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit26.id, songcredit26.song_id, songcredit26.type, songcredit26.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit27.id, songcredit27.song_id, songcredit27.type, songcredit27.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit28.id, songcredit28.song_id, songcredit28.type, songcredit28.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit29.id, songcredit29.song_id, songcredit29.type, songcredit29.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit30.id, songcredit30.song_id, songcredit30.type, songcredit30.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit31.id, songcredit31.song_id, songcredit31.type, songcredit31.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit32.id, songcredit32.song_id, songcredit32.type, songcredit32.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit33.id, songcredit33.song_id, songcredit33.type, songcredit33.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit34.id, songcredit34.song_id, songcredit34.type, songcredit34.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit35.id, songcredit35.song_id, songcredit35.type, songcredit35.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit36.id, songcredit36.song_id, songcredit36.type, songcredit36.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit37.id, songcredit37.song_id, songcredit37.type, songcredit37.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
  pool.query(`INSERT INTO songs_credits (id, song_id, type, artist_id)
            Values ($1, $2, $3, $4)`, [songcredit38.id, songcredit38.song_id, songcredit38.type, songcredit38.artist_id],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
clearData()