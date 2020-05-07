import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
import AdminNewArtistEdit from './AdminNewArtistEdit'


const AdminEditCredit = () => {
  const params = useParams()
  console.log(params)
  const edit_credit_id = params.id

  const [isediting, set_isediting] = useState({ editing: false })

  const [isSubmitted, setIsSubmitted] = useState({ submitted: false })

  const [isDeleted, setIsDeleted] = useState({ deleted: false })

  const [edit_credit, set_edit_credit] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_credits/:edit_credit_id', { params: { edit_credit_id: edit_credit_id } })
      .then((res) => {
        console.log(res)
        set_edit_credit(res.data[0])
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
    name: edit_credit.name,
    type: edit_credit.type
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_credit.credit_id
      const song_id = edit_credit.song_id
      const artist_id = edit_credit.artist_id
      const name = edit_credit.name
      const type = edit_credit.type

      setIsSubmitted({ submitted: true })

      const params = {
        id: id,
        name: name,
        type: type,
        artist_id: artist_id,
        song_id: song_id,
      }
      axios.put('/api/admin/songs_credits/credit_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_credits/${edit_credit_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_credit_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_credits/${edit_credit_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      is_group: edit_credit.is_group,
      name: edit_credit.name,
      real_name: edit_credit.real_name,
      birthdate: edit_credit.birthdate,
      active_status: edit_credit.active_status
    })
  }, [edit_credit.is_group, edit_credit.name, edit_credit.real_name, edit_credit.birthdate, edit_credit.active_status])


  console.log(edit_credit)
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
      <h2>Edit Credit</h2>
      <div>
        <label>Name:  </label>
        <span>{edit_credit.name}</span>
      </div>
      <div>
        <span>
          <label>Type:  </label>
          <span>{edit_credit.type}</span>
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
      {/*
        isediting.editing
          ? <span>
            <AdminNewArtistEdit
              is_group={edit_credit.is_group}
              name={edit_credit.name}
              real_name={edit_credit.real_name}
              birthdate={edit_credit.birthdate}
              active_status={edit_credit.active_status}
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

export default AdminEditCredit