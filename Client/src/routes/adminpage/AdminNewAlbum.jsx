import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
//import AdminNewAlbumEdit from './AdminNewAlbumEdit'


const AdminNewAlbum = () => {
  const params = useParams()
  console.log(params)
  const new_album_id = params.id

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [new_album, set_new_album] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_albums/:new_album_id', { params: { new_album_id: new_album_id } })
      .then((res) => {
        console.log(res)
        set_new_album(res.data[0])
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
    title: '',
    artist_name: 'name',
    release_date: new Date
  })

  const handleSubmit = React.useCallback(
    (event) => {
      //const id = artists.length
      const title = new_album.title
      const artist_name = new_album.artist_name
      const release_date = new_album.release_date
      const artist_id = new_album.artist_id

      setIsSubmitted({ submitted: true })

      const params = {
        //id: id,
        title: title,
        artist_name: artist_name,
        release_date: release_date,
        artist_id: artist_id
      }
      axios.post('/api/admin/albums', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/new_albums/${new_album_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(title + artist_name + artist_id + release_date)
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + new_album_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/new_albums/${new_album_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

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

  return (
    <div>
      <p><Link to={`/admin`}>Back</Link></p>
      <h1>Admin</h1>
      <h2>New Album</h2>
      <div>
        <label>Title:  </label>
        <span>{new_album.title}</span>
      </div>
      <div>
        <span>
          <label>Artist:  </label>
          <span> {new_album.artist_name}</span>
        </span>
      </div>
      <div>
        <label>Release Date: </label>
        <span>{prettyDate(new_album.release_date)}</span>
      </div>
      <div>
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
                  : <button type='button' onClick={handleSubmit}>Submit</button>}
              </span>}
            {isSubmitted.submitted
              ? null
              : <span>
                {isDeleted.deleted
                  ? null
                  : <button type='button' onClick={handleEdit} disabled>Edit</button>}</span>}
            {isSubmitted.submitted
              ? null
              : <span>
                {isDeleted.deleted
                  ? <span>Deleted.</span>
                  : <button type='button' onClick={handleDelete}>Delete</button>
                }
              </span>}
          </span>
        }
      </div>
      {
        isediting.editing
          ? <span>
            {/*
            <AdminNewArtistEdit
              is_group={new_album.is_group}
              name={new_album.name}
              real_name={new_album.real_name}
              birthdate={new_album.birthdate}
              active_status={new_album.active_status}
            >
            </AdminNewArtistEdit>
            */}
          </span>
          : null
      }
      <div>
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
                    : <button type='button' onClick={handleSubmit}>Submit</button>}
                </span>}
              {isSubmitted.submitted
                ? null
                : <span>
                  {isDeleted.deleted
                    ? null
                    : <button type='button' onClick={handleCancelEdit}>Cancel Editing</button>}</span>}
              {isSubmitted.submitted
                ? null
                : <span>
                  {isDeleted.deleted
                    ? <span>Deleted.</span>
                    : <button type='button' onClick={handleDelete}>Delete</button>
                  }
                </span>}
            </span>
            :
            null
        }
      </div>
    </div>

  )
}

export default AdminNewAlbum