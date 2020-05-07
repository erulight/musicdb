import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const IndexAlbums = (props) => {

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