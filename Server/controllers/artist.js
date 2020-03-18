const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/artists/:artist_id', (req, res, next) => {
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

router.get('/albums/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM albums
              WHERE artist_id=$1
              ORDER BY release_date DESC`,
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

router.get('/tracks/:album_id', (req, res, next) => {
  const album_id = req.query.album_id
  pool.query(`SELECT * FROM tracks
              LEFT OUTER JOIN songs ON tracks.song_id
              WHERE album_id = $1`,
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

router.get('/songs.ft_artist_id/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM songs
              WHERE ft_artist_id =$1
              ORDER BY id ASC`,
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

router.get('/songs.lyrics_id/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM songs
              WHERE lyrics_id =$1
              ORDER BY id ASC`,
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

router.get('/songs.composer_id/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM songs
              WHERE composer_id =$1
              ORDER BY id ASC`,
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

router.get('/songs.arrangement_id/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM songs
              WHERE arrangement_id =$1
              ORDER BY id ASC`,
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

module.exports = router