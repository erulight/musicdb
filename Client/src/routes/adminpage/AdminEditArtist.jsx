import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
import AdminNewArtistEdit from './AdminNewArtistEdit'


const AdminEditArtist = () => {
  const params = useParams()
  console.log(params)
  const edit_artist_id = params.id

  const [isediting, set_isediting] = useState({editing: false})

  const [isSubmitted, setIsSubmitted] = useState({submitted: false})

  const [isDeleted, setIsDeleted] = useState({deleted: false})

  const [edit_artist, set_edit_artist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_artists/:edit_artist_id', { params: { edit_artist_id: edit_artist_id } })
      .then((res) => {
        console.log(res)
        set_edit_artist(res.data[0])
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
    is_group: edit_artist.is_group,
    name: edit_artist.name,
    real_name: edit_artist.real_name,
    birthdate: edit_artist.birthdate,
    active_status: edit_artist.active_status
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_artist.artist_id
      const name = edit_artist.name
      const real_name = edit_artist.real_name
      const birthdate = edit_artist.birthdate
      const active_status = edit_artist.active_status

      setIsSubmitted({ submitted: true })

      const params = {
        artist_id: id,
        name: name,
        real_name: real_name,
        birthdate: birthdate,
        active_status: active_status
      }
      axios.put('/api/admin/artists/artist_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_artists/${edit_artist_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(id + name + real_name + birthdate + active_status)
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_artist_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_artists/${edit_artist_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      is_group: edit_artist.is_group,
      name: edit_artist.name,
      real_name: edit_artist.real_name,
      birthdate: edit_artist.birthdate,
      active_status: edit_artist.active_status
    })
  }, [edit_artist.is_group, edit_artist.name, edit_artist.real_name, edit_artist.birthdate, edit_artist.active_status])


  console.log(edit_artist)
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

  const isDisabled = edit_artist.is_group === true
  return (
    <div>
      <p><Link to={`/admin`}>Back</Link></p>
      <h1>Admin</h1>
      <h2>Edit Artist</h2>
      <div>
        {edit_artist.active_status
          ? <span>Active</span>
          : <span>Inactive</span>}
      </div>
      <div>
        <label>Name:  </label>
        <span>{edit_artist.name}</span>
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Real Name:  </label>
            <span>{edit_artist.real_name}</span>
          </span>
          : null
        }
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Birthday: </label>
            <span>{prettyDate(edit_artist.birthdate)}</span>
          </span>
          : null
        }
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
      {/*
        isediting.editing
          ? <span>
            <AdminNewArtistEdit
              is_group={edit_artist.is_group}
              name={edit_artist.name}
              real_name={edit_artist.real_name}
              birthdate={edit_artist.birthdate}
              active_status={edit_artist.active_status}
            >
            </AdminNewArtistEdit>
          </span>
          : null
      */}
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

export default AdminEditArtist