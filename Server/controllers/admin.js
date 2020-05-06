const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/new_artists', (req, res, next) => {
  pool.query(`SELECT * FROM new_artists
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_albums', (req, res, next) => {
  pool.query(`SELECT * FROM new_albums
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_songs', (req, res, next) => {
  pool.query(`SELECT * FROM new_songs
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_members', (req, res, next) => {
  pool.query(`SELECT * FROM new_members
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/artists', (req, res, next) => {
  pool.query(`SELECT * FROM artists`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/artists/:artist_id', (req, res, next) => {
  artist_id = req.query.artist_id
  pool.query(`SELECT * FROM artists
              WHERE id = $1`,
    [artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/members/:artist_id', (req, res, next) => {
  artist_id = req.query.artist_id
  pool.query(`SELECT * FROM members
              WHERE id = $1`,
    [artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_artists/:new_artist_id', (req, res, next) => {
  new_artist_id = req.query.new_artist_id
  pool.query(`SELECT * FROM new_artists
              WHERE id = $1`,
    [new_artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_albums/:new_album_id', (req, res, next) => {
  new_album_id = req.query.new_album_id
  pool.query(`SELECT * FROM new_albums
              WHERE id = $1`,
    [new_album_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_songs/:new_song_id', (req, res, next) => {
  new_song_id = req.query.new_song_id
  pool.query(`SELECT * FROM new_songs
              WHERE id = $1`,
    [new_song_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/new_members/:new_member_id', (req, res, next) => {
  new_member_id = req.query.new_member_id
  pool.query(`SELECT * FROM new_members
              WHERE id = $1`,
    [new_member_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.post('/artists', (req, res, next) => {
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const active_status = req.body.active_status
  const is_group = req.body.is_group
  pool.query(`INSERT INTO artists (name, real_name, birthdate, active_status, is_group)
            Values ($1, $2, $3, $4, $5)`, [name, real_name, birthdate, active_status, is_group], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.post('/albums', (req, res, next) => {
  const title = req.body.title
  const artist_name = req.body.artist_name
  const release_date = req.body.release_date
  const artist_id = req.body.artist_id
  pool.query(`INSERT INTO albums (title, artist_name, release_date, artist_id)
            Values ($1, $2, $3, $4)`, [title, artist_name, release_date, artist_id], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.post('/songs', (req, res, next) => {
  const title = req.body.title
  const artist_name = req.body.artist_name
  const release_date = req.body.release_date
  const artist_id = req.body.artist_id
  pool.query(`INSERT INTO songs (title, artist_name, release_date, artist_id)
            Values ($1, $2, $3, $4)`, [title, artist_name, release_date, artist_id], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.post('/songs_albums', (req, res, next) => {
  const song_id = req.body.song_id
  const album_id = req.body.album_id
  pool.query(`INSERT INTO songs_albums (song_id, album_id)
            Values ($1, $2)`, [song_id, album_id], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})


router.post('/members', (req, res, next) => {
  const member_of_id = req.body.member_of_id
  const artist_id = req.body.artist_id
  const name = req.body.name
  const position = req.body.position
  pool.query(`INSERT INTO members (member_of_id, name, position, artist_id)
            Values ($1, $2, $3, $4)`, [member_of_id, name, position, artist_id], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.delete('/new_artists/:new_artist_id', (req, res, next) => {
  const new_artist_id = req.params.new_artist_id
  pool.query(`DELETE FROM new_artists WHERE id = $1`, [new_artist_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.delete('/new_albums/:new_album_id', (req, res, next) => {
  const new_album_id = req.params.new_album_id
  pool.query(`DELETE FROM new_albums WHERE id = $1`, [new_album_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.delete('/new_songs/:new_song_id', (req, res, next) => {
  const new_song_id = req.params.new_song_id
  pool.query(`DELETE FROM new_songs WHERE id = $1`, [new_song_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.delete('/new_members/:new_member_id', (req, res, next) => {
  const new_member_id = req.params.new_member_id
  pool.query(`DELETE FROM new_songs WHERE id = $1`, [new_member_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.get('/edit_artists', (req, res, next) => {
  pool.query(`SELECT * FROM edit_artists
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/edit_artists/:edit_artist_id', (req, res, next) => {
  edit_artist_id = req.query.edit_artist_id
  pool.query(`SELECT * FROM edit_artists
              WHERE id = $1`,
    [edit_artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/edit_members', (req, res, next) => {
  pool.query(`SELECT * FROM edit_members
              ORDER BY id DESC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/edit_members/:edit_member_id', (req, res, next) => {
  edit_member_id = req.query.edit_member_id
  pool.query(`SELECT * FROM edit_members
              WHERE id = $1`,
    [edit_member_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.delete('/edit_artists/:edit_artist_id', (req, res, next) => {
  const edit_artist_id = req.params.edit_artist_id
  pool.query(`DELETE FROM edit_artists WHERE id = $1`, [edit_artist_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.put('/artists/:artist_id', (req, res, next) => {
  const artist_id = req.body.artist_id
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const active_status = req.body.active_status
  pool.query(`UPDATE artists SET
            name = $1, real_name = $2, birthdate = $3, active_status = $4
            WHERE id = $5`, 
            [name,real_name,birthdate,active_status,artist_id], (q_err, q_res) => {
              res.json(q_res.rows)
              console.log(q_err)
            })
})

router.delete('/edit_members/:edit_member_id', (req, res, next) => {
  const edit_member_id = req.params.edit_member_id
  pool.query(`DELETE FROM edit_members WHERE id = $1`, [edit_member_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
})

router.put('/members/:member_id', (req, res, next) => {
  const id = req.body.id
  const name = req.body.name
  const position = req.body.position
  const artist_id = req.body.artist_id
  const member_of_id = req.body.member_of_id
  pool.query(`UPDATE members SET
            name = $1, position = $2, artist_id = $3, member_of_id = $4
            WHERE id = $5`, 
            [name,position,artist_id,member_of_id,id], (q_err, q_res) => {
              res.json(q_res.rows)
              console.log(q_err)
            })
})

module.exports = router