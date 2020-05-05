const express = require('express')
var router = express.Router()
const pool = require('../db/db')

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