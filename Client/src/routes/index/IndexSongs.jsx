import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Songs on the Index Page
 */
const IndexSongs = () => {

  const [songs, setSongs] = useState([])
  useEffect(() => {
    axios.get('/api/index/songs')
      .then((res) => {
        console.log(res)
        setSongs(res.data)
      })
  }, []
  )

  return (
    songs.map((song) => {
      return (
        <div key={song.id} className='index-list-item'>
          <Link to={`/song/${song.id}`}>{song.title}</Link>
        </div>
      )
    })
  )
}

export default IndexSongs