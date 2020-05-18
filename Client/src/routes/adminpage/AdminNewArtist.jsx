import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
import AdminNewArtistEdit from './AdminNewArtistEdit'

/**
 * Renders the New Artist page in the Admin App
 */
const AdminNewArtist = () => {
  const params = useParams()
  console.log(params)
  const new_artist_id = params.id
  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [new_artist, set_new_artist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_artists/:new_artist_id', { params: { new_artist_id: new_artist_id } })
      .then((res) => {
        console.log(res)
        set_new_artist(res.data[0])
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
    is_group: 'false',
    name: 'name',
    real_name: 'real name',
    birthdate: new Date,
    active_status: 'true'
  })

  const handleSubmit = React.useCallback(
    (event) => {
      //const id = artists.length
      const name = new_artist.name
      const real_name = new_artist.real_name
      const birthdate = new_artist.birthdate
      const active_status = new_artist.active_status

      setIsSubmitted({ submitted: true })

      const params = {
        //id: id,
        name: name,
        real_name: real_name,
        birthdate: birthdate,
        active_status: active_status
      }
      axios.post('/api/admin/artists', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/new_artists/${new_artist_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(name + real_name + birthdate + active_status)
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + new_artist_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/new_artists/${new_artist_id}`)
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

  const isDisabled = new_artist.is_group === true
  return (
    <div>
      <p className='back'><Link to={`/admin`}>Back</Link></p>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>New Artist</h2>
      </div>
      <div className='list-container'>
        <div className='input-container'>
          {new_artist.is_group
            ? <span>Group</span>
            : <span>Solo Artist</span>}
        </div>
        <div className='input-container'>
          {new_artist.active_status
            ? <span>Active</span>
            : <span>Inactive</span>}
        </div>
        <div className='input-container'>
          <label className='input-label'>Name:  </label>
          <span>{new_artist.name}</span>
        </div>
        <div className='input-container'>
          {!isDisabled
            ? <span>
              <label className='input-label'>Real Name:  </label>
              <span> {new_artist.real_name}</span>
            </span>
            : null
          }
        </div>
        <div className='input-container'>
          {!isDisabled
            ? <span>
              <label className='input-label'>Birthday: </label>
              <span>{prettyDate(new_artist.birthdate)}</span>
            </span>
            : null
          }
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
                    : <button type='button' onClick={handleEdit}>Edit</button>}</span>}
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
        {
          isediting.editing
            ? <span>
              <AdminNewArtistEdit
                is_group={new_artist.is_group}
                name={new_artist.name}
                real_name={new_artist.real_name}
                birthdate={new_artist.birthdate}
                active_status={new_artist.active_status}
              >
              </AdminNewArtistEdit>
            </span>
            : null
        }
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

export default AdminNewArtist