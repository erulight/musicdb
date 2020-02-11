var router = express.Router()

router.get('/api/artist', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM artist
              WHERE id = $1`,
    [artist_id], (q_err, q_res) => {
      if (q_err) {
        res.status(500)
        next()
      }
      res.json(q_res.row)
    })
})

router.get('/api/album', (req, res, next) => {
  const artist_id = req.query.artist_id
  pool.query(`SELECT * FROM album
              WHERE artist_id = $1`,
    [artist_id], (q_err, q_res) => {
      if (q_err) {
        res.status(500)
        next()
      }
      res.json(q_res.row)
    })
})

router.get('/api/song', (req, res, next) => {
  const album_id = req.query.album_id
  pool.query(`SELECT * FROM song
              WHERE album_id = $1
              ORDER BY track_number ASC`,
    [album_id], (q_err, q_res) => {
      if (q_err) {
        res.status(500)
        next()
      }
      res.json(q_res.row)
    })
})