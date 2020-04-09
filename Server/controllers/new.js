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
  pool.query(`INSERT INTO new_artists (name, real_name, birthdate, is_group)
            Values ($1, $2, $3, $4)`, [name, real_name, birthdate, is_group], (q_err, q_res) => {
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
  const name = req.body.name
  const position = req.body.position
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
})

router.post('/new_albums', (req, res, next) => {
  const title = req.body.title
  const release_date = req.body.release_date
  pool.query(`INSERT INTO new_albums (title, release_date)
            Values ($1, $2)`, [title, release_date], (q_err, q_res) => {
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
  pool.query(`INSERT INTO new_songs (title, release_date)
            Values ($1, $2)`, [title, release_date], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

module.exports = router