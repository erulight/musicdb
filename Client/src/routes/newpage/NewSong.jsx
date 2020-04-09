import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NewSong = (props) => {

  const [formValues, setFormValues] = useState({
    title: 'Title',
    release_date: new Date
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const title = formValues.title
      const release_date = formValues.release_date

      const params = {
        title: title,
        release_date: release_date,
      }
      axios.post('/api/new/new_songs', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(title + release_date)
    }
  )

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
      console.log(formValues)
    }
  )

  return (
    <form>
      <p><Link to={`/new`}>Back</Link></p>
      <h1>New Song</h1>
      <div>
        <label>Title</label>
        <input name='title' value={formValues.title} onChange={handleChange} />
      </div>
      <div>
        <label>Artist (TODO: Need Search function)</label>
        <input name='artist_name' />
      </div>
      <div>
        <label>Release Date</label>
        <input type='date' name='release_date' value={formValues.release_date} onChange={handleChange}/>
      </div>
      <div>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default NewSong