import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const IndexArtists = (props) => {

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