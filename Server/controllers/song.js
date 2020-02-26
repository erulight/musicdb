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

module.exports = router