const pool = require('../db')

// TEST DATA

// Test Members

const member1 = {
  id: 1,
  member_of_id: 5,
  artist_id: 1,
  name: 'One',
  position: 'Vocals'
}

const member2 = {
  id: 2,
  member_of_id: 5,
  artist_id: 2,
  name: 'Two',
  position: 'Guitar'
}

const member3 = {
  id: 3,
  member_of_id: 5,
  artist_id: 3,
  name: 'Three',
  position: 'Bass'
}

const member4 = {
  id: 4,
  member_of_id: 5,
  artist_id: 4,
  name: 'Four',
  position: 'Drums'
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
  pool.query('DELETE FROM members WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('3'); insertMembers() })
}
const insertMembers = () => {
  pool.query(`INSERT INTO members (id, member_of_id, artist_id, name, position)
            Values ($1, $2, $3, $4, $5)`, [member1.id, member1.member_of_id, member1.artist_id, member1.name, member1.position],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO members (id, member_of_id, artist_id, name, position)
            Values ($1, $2, $3, $4, $5)`, [member2.id, member2.member_of_id, member2.artist_id, member2.name, member2.position],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO members (id, member_of_id, artist_id, name, position)
            Values ($1, $2, $3, $4, $5)`, [member3.id, member3.member_of_id, member3.artist_id, member3.name, member3.position],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO members (id, member_of_id, artist_id, name, position)
            Values ($1, $2, $3, $4, $5)`, [member4.id, member4.member_of_id, member4.artist_id, member4.name, member4.position],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
clearData()