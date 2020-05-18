import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

/**
 * Renders the Edit Track page in the Admin App
 */
const AdminEditTrack = () => {
  const params = useParams()
  console.log(params)
  const edit_track_id = params.id

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [edit_track, set_edit_track] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_tracks/:edit_track_id', { params: { edit_track_id: edit_track_id } })
      .then((res) => {
        console.log(res)
        set_edit_track(res.data[0])
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    title: '',
    number: 'name',
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_track.track_id
      const title = edit_track.title
      const number = edit_track.number
      const song_id = edit_track.song_id
      const album_id = edit_track.album_id

      setIsSubmitted({ submitted: true })

      const params = {
        id: id,
        title: title,
        number: number,
        song_id: song_id,
        album_id: album_id
      }
      axios.put('/api/admin/tracks/track_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_tracks/${edit_track_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_track_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_tracks/${edit_track_id}`)
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
      <p className='back'><Link to={`/admin`}>Back</Link></p>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>New Member</h2>
      </div>
      <div className='list-container'>
        <div className='input-container'>
          <label className='input-label'>Title:  </label>
          <span>{edit_track.title}</span>
        </div>
        <div className='input-container'>
          <span>
            <label className='input-label'>Track Number:  </label>
            <span> {edit_track.number}</span>
          </span>
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
        {
          isediting.editing
            ? <span>
              {/*Editing*/}
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

export default AdminEditTrack