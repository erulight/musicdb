const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/songs/:song_id', (req, res, next) => {
  const song_id = req.query.song_id
  pool.query(`SELECT * FROM songs
              WHERE id=$1`,
    [song_id], (q_err, q_res = {}) => {
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
  pool.query(`SELECT * FROM albums`,
    [], (q_err, q_res = {}) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/artists', (req, res, next) => {
  pool.query(`SELECT * FROM artists`,
    [], (q_err, q_res = {}) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/songs_credits/:song_id/:type', (req, res, next) => {
  const song_id = req.query.song_id
  const type = req.query.type
  pool.query(`SELECT * FROM songs_credits
              WHERE song_id = $1
              AND type= $2`,
    [song_id,type], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/songs_albums/:song_id', (req, res, next) => {
  const song_id = req.query.song_id
  pool.query(`SELECT * FROM songs_albums
              WHERE song_id=$1
              ORDER BY id ASC`,
    [song_id], (q_err, q_res = {}) => {
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