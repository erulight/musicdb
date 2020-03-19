const express = require('express')
var router = express.Router()
const pool = require('../db/db')

router.get('/new_artists', (req, res, next) => {
  pool.query(`COUNT(*) FROM new_artists`,
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

router.post('/new_artists', (req, res, next) => {
  const id = req.body.id
  const name = req.body.name
  const real_name = req.body.real_name
  const birthdate = req.body.birthdate
  const is_group = req.body.is_group
  pool.query(`INSERT INTO new_artists (id, name, real_name, birthdate, is_group)
            Values ($1, $2, $3, $4, $5)`, [id, name, real_name, birthdate, is_group], (q_err, q_res) => {
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