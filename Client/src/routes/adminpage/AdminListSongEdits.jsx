import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListSongEdits = (props) => {

  const [song_edits, set_song_edits] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_songs')
      .then((res) => {
        console.log(res)
        set_song_edits(res.data)
      })
  }, []
  )

  return (
    song_edits.map((song_edit) => {
      return (
        <div key={song_edit.id}>
          <Link to={`/admin/edit/song/${song_edit.id}`}>{song_edit.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListSongEdits