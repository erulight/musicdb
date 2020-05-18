import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all albums on the Index Page
 */
const IndexAlbums = () => {

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/index/albums')
      .then((res) => {
        console.log(res)
        setAlbums(res.data)
      })
  }, []
  )

  return (
    albums.map((album) => {
      return (
        <div key={album.id} className='index-list-item'>
          <Link to={`/album/${album.id}`}>{album.title}</Link>
        </div>
      )
    })
  )
}

export default IndexAlbums