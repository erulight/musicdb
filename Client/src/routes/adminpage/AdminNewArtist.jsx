import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'


const AdminNewArtist = () => {
  const params = useParams()
  console.log(params)
  const new_artist_id = params.id;

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
    birthdate: new Date
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = artists.length + 1
      const name = new_artist.name
      const real_name = new_artist.real_name
      const birthdate = new_artist.birthdate

      const params = {
        id: id,
        name: name,
        real_name: real_name,
        birthdate: birthdate
      }
      axios.post('/api/admin/artists', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(id + name + real_name + birthdate)
    }
  )

  const handleDelete = React.useCallback(
    (event) => {
      console.log('clicked')
      axios.delete('/api/admin/new_artists/:new_artist_id', { params : {new_artist_id: new_artist_id}})
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  const handleEdit = React.useCallback(
    (event) => {

    }
  )

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
      <p><Link to={`/admin`}>Back</Link></p>
      <h1>Admin</h1>
      <h2>New Artist</h2>
      <div>
        {new_artist.is_group
        ? <span>Group</span>
        : <span>Solo Artist</span>}
      </div>
      <div>
        <label>Name:  </label>
        <span>{new_artist.name}</span>
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Real Name:  </label>
            <span> {new_artist.real_name}</span>
          </span>
          : null
        }
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Birthday: </label>
            <span>{prettyDate(new_artist.birthdate)}</span>
          </span>
          : null
        }
      </div>
      {isDisabled ?

        <div>
          <h1>Members</h1>
          <div>
            <label>Amount of Members:</label>
          </div>
        </div>
        : null}
      <div>
        <button type='button' onClick={handleSubmit}>Submit</button>
        <button type='button' onClick={handleEdit}>Edit (NYI)</button>
        <button type='button' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default AdminNewArtist