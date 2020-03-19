const pool = require('../db')

// TEST DATA

// Test Artists

const artist1 = {
  id: 1,
  name: 'One',
  real_name: 'Member One',
  birthdate: new Date('January 1, 2000')
}

const artist2 = {
  id: 2,
  name: 'Two',
  real_name: 'Member Two',
  birthdate: new Date('January 2, 2000')
}

const artist3 = {
  id: 3,
  name: 'Three',
  real_name: 'Member Three',
  birthdate: new Date('January 3, 2000')
}

const artist4 = {
  id: 4,
  name: 'Four',
  real_name: 'Member Four',
  birthdate: new Date('January 4, 2000')
}

const artist5 = {
  id: 5,
  name: 'Band One'
}


//Clear past data
const clearData = () => {  clearSongsCredits() }
const clearSongsCredits = () => {
  pool.query('DELETE FROM songs_credits WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('11'); clearSongsAlbums() })
}
const clearSongsAlbums = () => {
  pool.query('DELETE FROM songs_albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('10'); clearSongsLabels() })
}
const clearSongsLabels = () => {
  pool.query('DELETE FROM songs_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('9'); clearAlbumsLabels() })
}
const clearAlbumsLabels = () => {
  pool.query('DELETE FROM albums_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('8'); clearArtistsLabels() })
}
const clearArtistsLabels = () => {
  pool.query('DELETE FROM artists_labels WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('7'); clearTracks() })
}
const clearTracks = () => {
  pool.query('DELETE FROM tracks WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('6'); clearSongs() })
}
const clearSongs = () => {
  pool.query('DELETE FROM songs WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('5'); clearAlbums() })
}
const clearAlbums = () => {
  pool.query('DELETE FROM albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('4'); clearMembers() })
}
const clearMembers = () => {
  pool.query('DELETE FROM members WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('3'); clearArtists() })
}
const clearArtists = () => {
  pool.query('DELETE FROM artists WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('2'); insertArtists() })
}
const insertArtists = () => {
  pool.query(`INSERT INTO artists (id, name, real_name, birthdate)
            Values ($1, $2, $3, $4)`, [artist1.id, artist1.name, artist1.real_name, artist1.birthdate],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO artists (id, name, real_name, birthdate)
            Values ($1, $2, $3, $4)`, [artist2.id, artist2.name, artist2.real_name, artist2.birthdate],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO artists (id, name, real_name, birthdate)
            Values ($1, $2, $3, $4)`, [artist3.id, artist3.name, artist3.real_name, artist3.birthdate],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO artists (id, name, real_name, birthdate)
            Values ($1, $2, $3, $4)`, [artist4.id, artist4.name, artist4.real_name, artist4.birthdate],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO artists (id, name)
            Values ($1, $2)`, [artist5.id, artist5.name],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
clearData()