const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/new_artists', (req, res, next) => {
  pool.query(`SELECT * FROM new_artists
              ORDER BY id DESC`,
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

router.get('/artists', (req, res, next) => {
  pool.query(`SELECT * FROM artists`,
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

router.get('/new_artists/:new_artist_id', (req, res, next) => {
  new_artist_id = req.query.new_artist_id
  pool.query(`SELECT * FROM new_artists
              WHERE id = $1`,
    [new_artist_id], (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
        res.status(505).end()
        next()
      }
      res.json(q_res.rows)
      next()
    })
})

router.post('/artists', (req, res, next) => {
  const id = req.body.id
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  pool.query(`INSERT INTO artists (id, name, real_name, birthdate)
            Values ($1, $2, $3, $4)`, [id, name, real_name, birthdate], (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
      res.status(505).end()
      next()
    }
    res.json(q_res.rows)
    next()
  })
})

router.delete('/new_artists/:new_artist_id', (req, res, next) => {
  const new_artist_id = req.body.new_artist_id
  /*
  pool.query(`DELETE FROM new_artists WHERE id = $1`, [new_artist_id],
    (q_err, q_res) => {
      res.json(q_res.rows)
      console.log(q_err)
    })
    */
  pool.query('DELETE FROM new_artists WHERE id =$1', [new_artist_id], (q_err, q_res) => { if (q_err) { console.log(q_err) }
})
}
)

module.exports = router