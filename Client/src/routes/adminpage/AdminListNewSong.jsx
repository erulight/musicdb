import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewSong = (props) => {

  const [new_songs, set_new_songs] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_songs')
      .then((res) => {
        console.log(res)
        set_new_songs(res.data)
      })
  }, []
  )

  return (
    new_songs.map((new_song) => {
      return (
        <div key={new_song.id}>
          <Link to={`/admin/new_song/${new_song.id}`}>{new_song.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewSong