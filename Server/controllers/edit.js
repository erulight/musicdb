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

router.post('/edit_artists', (req, res, next) => {
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const is_group = req.body.is_group
  const active_status = req.body.active_status
  const artist_id = req.body.artist_id
  pool.query(`INSERT INTO edit_artists (name, real_name, birthdate, is_group, active_status, artist_id)
            Values ($1, $2, $3, $4, $5, $6)`, [name, real_name, birthdate, is_group, active_status, artist_id], (q_err, q_res) => {
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