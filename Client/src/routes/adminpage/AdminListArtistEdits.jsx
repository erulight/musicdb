import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListArtistEdits= (props) => {

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
        <div key={artist_edit.id}>
          <Link to={`/admin/edit/artist/${artist_edit.id}`}>{artist_edit.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListArtistEdits