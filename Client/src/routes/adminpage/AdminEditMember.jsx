import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'
import AdminNewArtistEdit from './AdminNewArtistEdit'


const AdminEditMember = () => {
  const params = useParams()
  console.log(params)
  const edit_member_id = params.id

  const [isediting, set_isediting] = useState({ editing: false })

  const [isSubmitted, setIsSubmitted] = useState({ submitted: false })

  const [isDeleted, setIsDeleted] = useState({ deleted: false })

  const [edit_member, set_edit_member] = useState({})
  useEffect(() => {
    axios.get('/api/admin/edit_members/:edit_member_id', { params: { edit_member_id: edit_member_id } })
      .then((res) => {
        console.log(res)
        set_edit_member(res.data[0])
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
    name: edit_member.name,
    position: edit_member.position
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = edit_member.member_id
      const member_of_id = edit_member.member_of_id
      const artist_id = edit_member.artist_id
      const name = edit_member.name
      const position = edit_member.position

      setIsSubmitted({ submitted: true })

      const params = {
        id: id,
        name: name,
        position: position,
        artist_id: artist_id,
        member_of_id: member_of_id,
      }
      axios.put('/api/admin/members/member_id', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/edit_members/${edit_member_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + edit_member_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/edit_members/${edit_member_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      is_group: edit_member.is_group,
      name: edit_member.name,
      real_name: edit_member.real_name,
      birthdate: edit_member.birthdate,
      active_status: edit_member.active_status
    })
  }, [edit_member.is_group, edit_member.name, edit_member.real_name, edit_member.birthdate, edit_member.active_status])


  console.log(edit_member)
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
        <h2 className='header-text'>Edit Member</h2>
      </div>
      <div className='input-container'>
        <label className='input-label'>Name:  </label>
        <span>{edit_member.name}</span>
      </div>
      <div className='input-container'>
        <span>
          <label className='input-label'>Position:  </label>
          <span>{edit_member.position}</span>
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
      {/*
        isediting.editing
          ? <span>
            <AdminNewArtistEdit
              is_group={edit_member.is_group}
              name={edit_member.name}
              real_name={edit_member.real_name}
              birthdate={edit_member.birthdate}
              active_status={edit_member.active_status}
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

  )
}

export default AdminEditMember