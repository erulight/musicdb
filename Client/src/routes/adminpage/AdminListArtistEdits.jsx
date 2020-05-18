import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Artist Edits pending in the Admin App
 */
const AdminListArtistEdits= () => {

  const [artist_edits, set_artist_edits] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_artists')
      .then((res) => {
        console.log(res)
        set_artist_edits(res.data)
      })
  }, []
  )

  return (
    artist_edits.map((artist_edit) => {
      return (
        <div className='index-list-item' key={artist_edit.id}>
          <Link to={`/admin/edit/artist/${artist_edit.id}`}>{artist_edit.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListArtistEdits