import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
//import AdminNewAlbumEdit from './AdminNewAlbumEdit'


const AdminNewTrack = () => {
  const params = useParams()
  console.log(params)
  const new_track_id = params.id

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [new_track, set_new_track] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_tracks/:new_track_id', { params: { new_track_id: new_track_id } })
      .then((res) => {
        console.log(res)
        set_new_track(res.data[0])
      })
  }, []
  )

  /*
  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/artists/:artist_id', { params: { artist_id: new_track.member_of_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, []
  )

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/admin/members/:artist_id', { params: { artist_id: new_track.member_of_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, []
  )
  */

  const [formValues, setFormValues] = useState({
    title: '',
    number: 'name',
  })

  const handleSubmit = React.useCallback(
    (event) => {
      //const id = artists.length
      const title = new_track.title
      const number = new_track.number
      const song_id = new_track.song_id
      const album_id = new_track.album_id

      setIsSubmitted({ submitted: true })

      const params = {
        //id: id,
        title: title,
        number: number,
        song_id: song_id,
        album_id: album_id
      }
      axios.post('/api/admin/tracks', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/new_tracks/${new_track_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + new_track_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/new_tracks/${new_track_id}`)
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
      <h2>New Member</h2>
      <div>
        <label>Title:  </label>
        <span>{new_track.title}</span>
      </div>
      <div>
        <span>
          <label>Track Number:  </label>
          <span> {new_track.number}</span>
        </span>
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
              is_group={new_track.is_group}
              name={new_track.name}
              real_name={new_track.real_name}
              birthdate={new_track.birthdate}
              active_status={new_track.active_status}
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

export default AdminNewTrack