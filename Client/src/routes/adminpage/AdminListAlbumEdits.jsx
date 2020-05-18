import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Album Edits Pending in the Admin App
 */
const AdminListAlbumEdits = () => {

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
        <div className='index-list-item' key={album_edit.id}>
          <Link to={`/admin/edit/album/${album_edit.id}`}>{album_edit.title}</Link>
        </div>
      )
    })
  )
}

export default AdminListAlbumEdits