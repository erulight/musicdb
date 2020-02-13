const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/api/get/artists/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM artists
              WHERE id=$1`,
    [artist_id], (q_err, q_res = {}) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/api/get/albums/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM albums
              WHERE artist_id=$1`,
    [artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/api/get/songs/:album_id', (req, res, next) => {
  const album_id = req.query.album_id
  pool.query(`SELECT * FROM songs
              WHERE album_id =$1
              ORDER BY track_number ASC`,
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

router.get('/api/artists', (req, res, next) => {
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

module.exports = router