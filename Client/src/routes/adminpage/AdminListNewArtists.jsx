import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all New Artists pending in the Admin App
 */
const AdminListNewArtist = () => {

  const [new_artists, set_new_artists] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_artists')
      .then((res) => {
        console.log(res)
        set_new_artists(res.data)
      })
  }, []
  )

  return (
    new_artists.map((new_artist) => {
      return (
        <div className='index-list-item' key={new_artist.id}>
          <Link to={`/admin/new_artist/${new_artist.id}`}>{new_artist.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewArtist