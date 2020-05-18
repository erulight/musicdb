import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

/**
 * Renders the New Member page in the Admin App
 */
const AdminNewMember = () => {
  const params = useParams()
  console.log(params)
  const new_member_id = params.id

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isDeleted, setIsDeleted] = useState({
    deleted: false
  })

  const [new_member, set_new_member] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_members/:new_member_id', { params: { new_member_id: new_member_id } })
      .then((res) => {
        console.log(res)
        set_new_member(res.data[0])
      })
  }, []
  )

  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/artists/:artist_id', { params: { artist_id: new_member.member_of_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, []
  )

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/admin/members/:artist_id', { params: { artist_id: new_member.member_of_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    name: '',
    position: 'name',
  })

  const handleSubmit = React.useCallback(
    (event) => {
      //const id = artists.length
      const name = new_member.name
      const position = new_member.position
      const member_of_id = new_member.member_of_id
      const artist_id = new_member.artist_id

      setIsSubmitted({ submitted: true })

      const params = {
        //id: id,
        name: name,
        position: position,
        member_of_id: member_of_id,
        artist_id: artist_id
      }
      axios.post('/api/admin/members', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      axios.delete(`/api/admin/new_members/${new_member_id}`)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(name + position + artist_id + member_of_id)
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked' + new_member_id)
      setIsDeleted({ deleted: true })
      axios.delete(`/api/admin/new_members/${new_member_id}`)
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
          <label className='input-label'>Name:  </label>
          <span>{new_member.name}</span>
        </div>
        <div className='input-container'>
          <span>
            <label className='input-label'>Position:  </label>
            <span> {new_member.position}</span>
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

export default AdminNewMember