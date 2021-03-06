const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/new_artists', (req, res, next) => {
  pool.query(`SELECT * FROM new_artists`,
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
  pool.query(`SELECT * FROM new_members`,
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

router.post('/new_artists', (req, res, next) => {
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const is_group = req.body.is_group
  const active_status = req.body.active_status
  pool.query(`INSERT INTO new_artists (name, real_name, birthdate, is_group, active_status)
            Values ($1, $2, $3, $4, $5)`, [name, real_name, birthdate, is_group, active_status], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.post('/new_members', (req, res, next) => {
  const members = req.body.members
  // const name = req.body.name
  // const position = req.body.position
  //Look up insert multiple

  pool.query(`INSERT INTO new_members (name, position)
            Values ($1, $2)`, [name, position], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
  console.log(members)
})

router.post('/new_albums', (req, res, next) => {
  const title = req.body.title
  const release_date = req.body.release_date
  const artist_name = req.body.artist_name
  const artist_id = req.body.artist_id
  pool.query(`INSERT INTO new_albums (title, release_date, artist_name, artist_id)
            Values ($1, $2, $3, $4)`, [title, release_date, artist_name, artist_id], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.post('/new_songs', (req, res, next) => {
  const title = req.body.title
  const release_date = req.body.release_date
  const artist_id = req.body.artist_id
  const artist_name = req.body.artist_name
  pool.query(`INSERT INTO new_songs (title, release_date, artist_id, artist_name)
            Values ($1, $2, $3, $4)`, [title, release_date, artist_id, artist_name], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.get('/artists/:search', (req, res, next) => {
  const search = req.query.search
  pool.query(`SELECT * FROM artists
              WHERE name ILIKE $1`,
    ['%'+search+'%'], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/albums/:search', (req, res, next) => {
  const search = req.query.search
  pool.query(`SELECT * FROM albums
              WHERE title ILIKE $1`,
    ['%'+search+'%'], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/songs/:search', (req, res, next) => {
  const search = req.query.search
  pool.query(`SELECT * FROM songs
              WHERE title ILIKE $1`,
    ['%'+search+'%'], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})


module.exports = router