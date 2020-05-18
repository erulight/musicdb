import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Track Edits pending in the Admin App
 */
const AdminListTrackEdits = () => {

  const [edit_tracks, set_edit_tracks] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_tracks')
      .then((res) => {
        console.log(res)
        set_edit_tracks(res.data)
      })
  }, []
  )

  return (
    edit_tracks.map((edit_track) => {
      return (
        <div className='index-list-item' key={edit_track.id}>
          <Link to={`/admin/edit/track/${edit_track.id}`}>{edit_track.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListTrackEdits