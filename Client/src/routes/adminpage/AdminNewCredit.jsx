import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
//import AdminNewAlbumEdit from './AdminNewAlbumEdit'


const AdminNewCredit = () => {
  const params = useParams()
  console.log(params)
  const new_credit_id = params.id

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [new_credit, set_new_credit] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_songs_credits/:new_credit_id', { params: { new_credit_id: new_credit_id } })
      .then((res) => {
        console.log(res)
        set_new_credit(res.data[0])
      })
  }, []
  )

  /*
  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/artists/:artist_id', { params: { artist_id: new_credit.member_of_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, []
  )

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/admin/members/:artist_id', { params: { artist_id: new_credit.member_of_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, []
  )
  */

  const [formValues, setFormValues] = useState({
    name: '',
    type: 'type',
  })

  const handleSubmit = React.useCallback(
    (event) => {
      //const id = artists.length
      const song_id = new_credit.song_id
      const name = new_credit.name
      const artist_id = new_credit.artist_id
      const type = new_credit.type

      setIsSubmitted({ submitted: true })

      const params = {
        //id: id,
        song_id: song_id,
        name: name,
        artist_id: artist_id,
        type: type
      }
      axios.post('/api/admin/songs_credits', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/new_songs_credits/${new_credit_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + new_credit_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/new_songs_credits/${new_credit_id}`)
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
      <h2>New Credit</h2>
      <div>
        <label>Name:  </label>
        <span>{new_credit.name}</span>
      </div>
      <div>
        <span>
          <label>Type:  </label>
          <span> {new_credit.type}</span>
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
              is_group={new_credit.is_group}
              name={new_credit.name}
              real_name={new_credit.real_name}
              birthdate={new_credit.birthdate}
              active_status={new_credit.active_status}
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

export default AdminNewCredit