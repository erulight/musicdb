import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListAlbumEdits = (props) => {

  const [album_edits, set_album_edits] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_albums')
      .then((res) => {
        console.log(res)
        set_album_edits(res.data)
      })
  }, []
  )

  return (
    album_edits.map((album_edit) => {
      return (
        <div key={album_edit.id}>
          <Link to={`/admin/edit/album/${album_edit.id}`}>{album_edit.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListAlbumEdits