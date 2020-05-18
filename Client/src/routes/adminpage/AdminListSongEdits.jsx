import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Song Edits pending in the Admin App
 */
const AdminListSongEdits = () => {

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
        <div className='index-list-item' key={song_edit.id}>
          <Link to={`/admin/edit/song/${song_edit.id}`}>{song_edit.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListSongEdits