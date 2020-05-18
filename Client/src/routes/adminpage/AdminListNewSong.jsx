import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all New Songs pending in the Admin App
 */
const AdminListNewSong = () => {

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
        <div className='index-list-item' key={new_song.id}>
          <Link to={`/admin/new_song/${new_song.id}`}>{new_song.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewSong