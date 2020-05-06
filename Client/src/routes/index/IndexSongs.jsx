import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const IndexSongs = (props) => {

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
        <div key={song.id}>
          <Link to={`/song/${song.id}`}>{song.title}</Link>
        </div>
      )
    })
  )
}

export default IndexSongs