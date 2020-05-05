import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownArtist from './DropDownArtist'

const NewAlbum = (props) => {

  const searchRef = React.useRef(null)

  const [formValues, setFormValues] = useState({
    title: 'Title',
    release_date: new Date,
    search: '',
    artist_id: null,
    artist_name: ''
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const title = formValues.title
      const release_date = formValues.release_date
      const artist_name = formValues.artist_name
      const artist_id = formValues.artist_id
      if (hasID.id) {
        artist_name = formValues.artist_name
      }
      else {
        artist_name = formValues.search
      }

      setIsSubmitted({ submitted: true })

      const params = {
        title: title,
        release_date: release_date,
        artist_name: artist_name,
        artist_id: artist_id
      }
      axios.post('/api/new/new_albums', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(title + release_date)
    }
  )

  const handleClick = React.useCallback(
    (result) => {
      const { id, name } = result
      setHasID({ id: true })
      setFormValues({
        artist_id: id,
        artist_name: name
      })
      searchRef.current.focus()
      console.log('clicked')
      console.log(id + name)
    }, []
  )

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
    }, []
  )

  const handleClear = React.useCallback(
    (event) => {
      setHasID({ id: false })
      setFormValues({
        artist_id: null,
        artist_name: null
      })
    }
  )


  return (
    <form>
      <p><Link to={`/new`}>Back</Link></p>
      <h1>New Album</h1>
      <div>
        <label>Title</label>
        <input name='title' value={formValues.title} onChange={handleChange} />
      </div>
      <div>
        {hasID.id ? <div>{formValues.artist_name}<button type='button' onClick={handleClear}>Clear</button></div> :
          <div className='artist-search-stuff'>
            <label>Artist</label>
            <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
            <DropDownArtist search={formValues.search} handleClick={handleClick}></DropDownArtist>
          </div>
        }
      </div>
      <div>
        <label>Release Date</label>
        <input type='date' name='release_date' value={formValues.release_date} onChange={handleChange} />
      </div>
      <div>
        {isSubmitted.submitted ? <span>Submitted.</span> : <button type='button' onClick={handleSubmit}>Submit</button>}
      </div>
    </form>
  )
}

export default NewAlbum