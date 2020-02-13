const pool = require('./db')

/*
  TEST DATA
*/

//Test Albums


const album1 = {
  id: 1,
  artist_id: 1,
  members: [1],
  album_title: 'The First Album',
  release_date: 'January 1, 2020',
  released: true
}

const album2 = {
  id: 2,
  artist_id: 1,
  members: [1],
  album_title: 'The Second Album',
  release_date: 'February 1, 2020',
  released: true
}

//Clear past data
const clearData = () => {
  pool.query('DELETE FROM songs WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('1'); clearAlbums() })
}
const clearAlbums = () => {
  pool.query('DELETE FROM albums WHERE id>0', (q_err, q_res) => { if (q_err) { console.log(q_err) } console.log('2'); insertAlbumsData() })
}
const insertAlbumsData = () => {
  pool.query(`INSERT INTO albums (id, artist_id, members, album_title, release_date, released)
            Values ($1, $2, $3, $4, $5, $6)`, [album1.id, album1.artist_id, album1.members, album1.album_title, album1.release_date, album1.released],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })

  pool.query(`INSERT INTO albums (id, artist_id, members, album_title, release_date, released)
            Values ($1, $2, $3, $4, $5, $6)`, [album2.id, album2.artist_id, album2.members, album2.album_title, album2.release_date, album2.released],
    (q_err, q_res) => {
      if (q_err) {
        console.log(q_err)
      }
    })
}
clearData()