const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/albums/:album_id', (req, res, next) => {
  const album_id = req.query.album_id
  pool.query(`SELECT * FROM albums
              WHERE id=$1`,
    [album_id], (q_err, q_res = {}) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/tracks/:album_id', (req, res, next) => {
  const album_id = req.query.album_id
  pool.query(`SELECT * FROM tracks
              WHERE album_id=$1
              ORDER BY tracks.disc, tracks.number ASC`,
    [album_id], (q_err, q_res) => {
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

module.exports = router