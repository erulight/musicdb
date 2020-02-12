const pool = require('./db')

const artist = {
  artist_name: "Test Artist 1",
  real_name: "Testimus Artimus",
  birthdate: new Date('January 1, 2000')
}

console.log(artist)
pool.query(`INSERT INTO artists (artist_name, real_name, birthdate)
            Values ($1, $2, $3)`, [artist.artist_name, artist.real_name, artist.birthdate],
  (q_err, q_res) => {
    if (q_err) {
      console.log(q_err)
    }
  })