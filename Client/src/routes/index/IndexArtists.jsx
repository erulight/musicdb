import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Artists on the Index Page
 */
const IndexArtists = () => {

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/index/artists')
      .then((res) => {
        console.log(res)
        setArtists(res.data)
      })
  }, []
  )
  
  return (
    artists.map((artist) => {
      return (
        <div key={artist.id} className='index-list-item'>
          <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
        </div>
      )
    })
  )
}

export default IndexArtists