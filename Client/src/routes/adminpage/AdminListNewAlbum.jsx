import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewAlbum = (props) => {

  const [new_albums, set_new_albums] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_albums')
      .then((res) => {
        console.log(res)
        set_new_albums(res.data)
      })
  }, []
  )

  return (
    new_albums.map((new_album) => {
      return (
        <div className='index-list-item' key={new_album.id}>
          <Link to={`/admin/new_album/${new_album.id}`}>{new_album.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewAlbum