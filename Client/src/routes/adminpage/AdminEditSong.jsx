import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'

/**
 * Renders the Edit Song page in the Admin App
 */
const AdminEditSong = () => {
  const params = useParams()
  console.log(params)
  const edit_song_id = params.id

  const [isediting, set_isediting] = useState({ editing: false })

  const [isSubmitted, setIsSubmitted] = useState({ submitted: false })

  const [isDeleted, setIsDeleted] = useState({ deleted: false })

  const [edit_song, set_edit_song] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_songs/:edit_song_id', { params: { edit_song_id: edit_song_id } })
      .then((res) => {
        console.log(res)
        set_edit_song(res.data[0])
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
    title: edit_song.title,
    search: '',
    release_date: edit_song.release_date,
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_song.song_id
      const title = edit_song.title
      const artist_name = edit_song.artist_name
      const artist_id = edit_song.artist_id
      const release_date = edit_song.release_date

      setIsSubmitted({ submitted: true })

      const params = {
        id: id,
        title: title,
        artist_name: artist_name,
        artist_id: artist_id,
        release_date: release_date,
      }
      axios.put('/api/admin/songs/song_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_songs/${edit_song_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_song_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_songs/${edit_song_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      title: edit_song.title,
      search: '',
      release_date: edit_song.release_date,
    })
  }, [edit_song.title, edit_song.release_date])


  console.log(edit_song)
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

  const isDisabled = edit_song.is_group === true
  return (
    <div>
      <p className='back'><Link to={`/admin`}>Back</Link></p>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Edit Song</h2>
      </div>
      <div className='list-container'>
        <div className='input-container'>
          <label className='input-label'>Title:  </label>
          <span>{edit_song.title}</span>
        </div>
        <div className='input-container'>
          <label className='input-label'>Artist:  </label>
          <span>{edit_song.artist_name}</span>
        </div>
        <div className='input-container'>
          <label className='input-label'>Release Date: </label>
          <span>{prettyDate(edit_song.release_date)}</span>
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
        {/*Editing*/}
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

export default AdminEditSong