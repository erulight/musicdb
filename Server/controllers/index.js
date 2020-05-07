const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/artists', (req, res, next) => {
  pool.query(`SELECT * FROM artists
              ORDER BY id ASC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/albums', (req, res, next) => {
  pool.query(`SELECT * FROM albums
              ORDER BY id ASC`,
    [], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/songs', (req, res, next) => {
  pool.query(`SELECT * FROM songs
              ORDER BY id ASC`,
    [], (q_err, q_res) => {
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