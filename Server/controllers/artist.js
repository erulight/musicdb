const express = require('express')
var router = express.Router()
const pool = require('../db/db')


//Artist.jsx
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

router.get('/members/:artist_id', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM members
              WHERE member_of_id=$1
              ORDER BY id ASC`,
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


//ArtistAlbums.jsx
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

//ArtistAlbumSongs
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

router.get('/songs', (req, res, next) => {
  pool.query(`SELECT * FROM songs`,
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

router.get('/songs_credits/artist/:artist_id/:type', (req, res, next) => {
  const type = req.query.type
  const artist_id = req.query.artist_id
  pool.query(`SELECT songs.id, songs.title, songs_credits.song_id, songs_credits.artist_id
              FROM songs, songs_credits
              WHERE songs_credits.song_id = songs.id
              AND songs_credits.type=$1
              AND songs_credits.artist_id=$2`,
    [type,artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(500).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.get('/songs_credits/song/:song_id/:type', (req, res, next) => {
  const type = req.query.type
  const song_id = req.query.song_id
  pool.query(`SELECT * FROM songs_credits
              WHERE type = $1
              AND song_id= $2`,
    [type,song_id], (q_err, q_res) => {
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