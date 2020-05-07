import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
import AdminNewArtistEdit from './AdminNewArtistEdit'


const AdminEditAlbum = () => {
  const params = useParams()
  console.log(params)
  const edit_album_id = params.id

  const [isediting, set_isediting] = useState({ editing: false })

  const [isSubmitted, setIsSubmitted] = useState({ submitted: false })

  const [isDeleted, setIsDeleted] = useState({ deleted: false })

  const [edit_album, set_edit_album] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_albums/:edit_album_id', { params: { edit_album_id: edit_album_id } })
      .then((res) => {
        console.log(res)
        set_edit_album(res.data[0])
      })
  }, []
  )

  const [artists, set_artists] = useState([])
  useEffect(() => {
    axios.get('/api/admin/artists')
      .then((res) => {
        console.log(res)
        set_artists(res.data)
        console.log(artists.length)
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    title: edit_album.title,
    search: '',
    release_date: edit_album.release_date,
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_album.album_id
      const title = edit_album.title
      const artist_name = edit_album.artist_name
      const artist_id = edit_album.artist_id
      const release_date = edit_album.release_date

      setIsSubmitted({ submitted: true })

      const params = {
        id: id,
        title: title,
        artist_name: artist_name,
        artist_id: artist_id,
        release_date: release_date,
      }
      axios.put('/api/admin/albums/album_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_albums/${edit_album_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_album_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_albums/${edit_album_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      title: edit_album.title,
      search: '',
      release_date: edit_album.release_date,
    })
  }, [edit_album.title, edit_album.release_date])


  console.log(edit_album)
  const handleEdit = React.useCallback((event) => { set_isediting({ editing: true }) })

  const handleCancelEdit = React.useCallback((event) => { set_isediting({ editing: false }) })

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, checked, type } = event.target

      setFormValues({
        ...formValues,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  )

  const isDisabled = edit_album.is_group === true
  return (
    <div>
      <p className='back'><Link to={`/admin`}>Back</Link></p>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Edit Album</h2>
      </div>
      <div className='list-container'>
        <div className='input-container'>
          <label className='input-label'>Title:  </label>
          <span>{edit_album.title}</span>
        </div>
        <div className='input-container'>
          <label className='input-label'>Artist:  </label>
          <span>{edit_album.artist_name}</span>
        </div>
        <div>
          <label className='input-label'>Release Date: </label>
          <span>{prettyDate(edit_album.release_date)}</span>
        </div>
        <div className='input-container'>
          {isediting.editing
            ? null
            : <span>
              {isSubmitted.submitted
                ?
                <span>Submitted.</span>
                :
                <span>
                  {isDeleted.deleted
                    ? null
                    : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
                </span>}
              {isSubmitted.submitted
                ? null
                : <span>
                  {isDeleted.deleted
                    ? null
                    : <button className='button-edit' type='button' onClick={handleEdit} disabled>Edit</button>}</span>}
              {isSubmitted.submitted
                ? null
                : <span>
                  {isDeleted.deleted
                    ? <span>Deleted.</span>
                    : <button className='button-delete' type='button' onClick={handleDelete}>Delete</button>
                  }
                </span>}
            </span>
          }
        </div>
        {/*
        isediting.editing
        ? <span>
            <AdminNewArtistEdit
            is_group={edit_album.is_group}
            name={edit_album.name}
            real_name={edit_album.real_name}
            birthdate={edit_album.birthdate}
            active_status={edit_album.active_status}
            >
            </AdminNewArtistEdit>
            </span>
            : null
          */}
        <div className='input-container'>
          {
            isediting.editing
              ?
              <span>
                {isSubmitted.submitted
                  ?
                  <span>Submitted.</span>
                  :
                  <span>
                    {isDeleted.deleted
                      ? null
                      : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
                  </span>}
                {isSubmitted.submitted
                  ? null
                  : <span>
                    {isDeleted.deleted
                      ? null
                      : <button className='button-edit' type='button' onClick={handleCancelEdit}>Cancel Editing</button>}</span>}
                {isSubmitted.submitted
                  ? null
                  : <span>
                    {isDeleted.deleted
                      ? <span>Deleted.</span>
                      : <button className='button-delete' type='button' onClick={handleDelete}>Delete</button>
                    }
                  </span>}
              </span>
              :
              null
          }
        </div>
      </div>
    </div>

  )
}

export default AdminEditAlbum