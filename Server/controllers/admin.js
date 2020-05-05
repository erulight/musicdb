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

router.post('/artists', (req, res, next) => {
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const active_status = req.body.active_status
  pool.query(`INSERT INTO artists (name, real_name, birthdate, active_status)
            Values ($1, $2, $3, $4)`, [name, real_name, birthdate, active_status], (q_err, q_res) => {
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
  const member_of_id = req.body.id
  const name = req.body.name
  const position = req.body.position
  pool.query(`INSERT INTO members (member_of_id, name, position)
            Values ($1, $2, $3)`, [member_of_id, name, position], (q_err, q_res) => {
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

module.exports = router