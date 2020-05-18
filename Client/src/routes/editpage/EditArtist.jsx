import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { prettyDate, inputDate } from '../../utils/dateutils'
import { useParams } from 'react-router-dom'

/**
 * Renders the Edit Artist Page
 */
const EditArtist = () => {

  let isGroup = false

  const params = useParams()
  console.log(params)
  const artist_id = params.id;

  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/edit/artists/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, [artist_id]
  )

  if (artist.is_group) {
    isGroup = true
  }

  console.log(artist)

  const [formValues, setFormValues] = useState({
    name: artist.name,
    real_name: artist.real_name,
    birthdate: artist.birthdate,
    active_status: artist.active_status ? 'true' : 'false'
  })

  console.log(formValues)

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
    }
  )
  console.log(formValues)
  console.log('is group: ' + isGroup)

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const name = formValues.name
      const real_name = formValues.real_name
      const birthdate = formValues.birthdate
      const is_group = isGroup ? 'true' : 'false'
      const active_status = formValues.active_status === 'true'
      const artist_id = artist.id

      setIsSubmitted({ submitted: true })

      const params = {
        name: name,
        real_name: real_name,
        birthdate: birthdate,
        is_group: is_group,
        active_status: active_status,
        artist_id: artist_id
      }
      axios.post('/api/edit/edit_artists', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
    }
  )

  React.useEffect(() => {
    setFormValues({
      name: artist.name,
      real_name: artist.real_name,
      birthdate: artist.birthdate,
      active_status: artist.active_status ? 'true' : 'false'
    })
  }, [artist.is_group, artist.name, artist.real_name, artist.birthdate, artist.active_status])


  return (
    <div className='page-container'>
      <form>
        <div className='title-container'>
          <h1 className='title-text'>Edit Artist</h1>
        </div>
        <div className='list-container'>
          <div className='existing-info'>Name: {artist.name}</div>
          <div className='existing-info'>{isGroup ? null : <span>Real Name: {artist.real_name}</span>}</div>
          <div className='existing-info'>{isGroup ? null : <span>Birthdate: {prettyDate(artist.birthdate)}</span>}</div>
          <div className='existing-info'>Status: {artist.active_status ? <span>Active</span> : <span>Inactive</span>}</div>
        </div>
        <div className='list-container'>
          <div className='input-container'>
            <label className='input-label'>Name:</label>
            <input name='name' value={formValues.name} onChange={handleChange} autoComplete='off'></input>
          </div>
          <div className='input-container'>
            {isGroup ? null : <span>
              <label className='input-label'>Real Name:</label>
              <input name='real_name' value={formValues.real_name} onChange={handleChange} autoComplete='off'></input>
            </span>}
          </div>
          <div className='input-container'>
            {isGroup ? null : <span><label className='input-label'>Birthdate</label>
              <input type='date' name='birthdate' value={inputDate(formValues.birthdate)} onChange={handleChange} ></input></span>}
          </div>
          <div className='input-container'>
            <label className='input-label'>Status:</label>
            <select
              name='active_status'
              onChange={handleChange}
              value={formValues.active_status}>
              <option value='true'>Active</option>
              <option value='false'>Inactive</option>
            </select>
          </div>
          <div className='input-container'>
            {isSubmitted.submitted ? <span>Submitted.</span> : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </form>
    </div>
  )
}


export default EditArtist