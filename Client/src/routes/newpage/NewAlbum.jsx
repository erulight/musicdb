import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'

const NewAlbum = (props) => {

  const searchRef = React.useRef(null)

  const [artistValues, setArtistValues] = useState({
    artist_name: '',
    artist_id: null
  })

  const [formValues, setFormValues] = useState({
    title: 'Title',
    release_date: new Date,
    search: ''
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
      let artist_name = artistValues.artist_name
      const artist_id = artistValues.artist_id
      if (hasID.id) {
        artist_name = artistValues.artist_name
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
      setArtistValues({
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
    }
  )

  const handleClear = React.useCallback(
    (event) => {
      setHasID({ id: false })
      setArtistValues({
        artist_name: '',
        artist_id: null,
      })
    }
  )


  return (
    <div className='page-container'>
      <form>
        <p className='back'><Link to={`/new`}>Back</Link></p>
        <div className='title-container'>
          <h1 className='title-text'>New Album</h1>
        </div>
        <div className='list-container'>
          <div className='input-container'>
            <label className='input-label'>Title</label>
            <input name='title' value={formValues.title} onChange={handleChange} autoComplete='off' />
          </div>
          <div className='input-container'>
            {hasID.id ? <div>{artistValues.artist_name}<button type='button' onClick={handleClear}>Clear</button></div> :
              <div className='artist-search-stuff'>
                <label className='input-label'>Artist</label>
                <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
                <DropDownArtist search={formValues.search} handleClick={handleClick}></DropDownArtist>
              </div>
            }
          </div>
          <div className='input-container'>
            <label className='input-label'>Release Date</label>
            <input type='date' name='release_date' value={formValues.release_date} onChange={handleChange} />
          </div>
          <div className='input-container'>
            {isSubmitted.submitted ? <span>Submitted.</span> : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewAlbum