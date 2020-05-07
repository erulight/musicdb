import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewTracks = (props) => {

  const [new_tracks, set_new_tracks] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_tracks')
      .then((res) => {
        console.log(res)
        set_new_tracks(res.data)
      })
  }, []
  )

  return (
    new_tracks.map((new_track) => {
      return (
        <div className='index-list-item' key={new_track.id}>
          <Link to={`/admin/new_track/${new_track.id}`}>{new_track.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewTracks