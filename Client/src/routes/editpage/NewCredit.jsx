import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import DropDownArtist from '../../utils/DropDownArtist'


const NewCredit = (props) => {

  const searchRef = React.useRef(null)

  const [artistValues, setArtistValues] = useState({
    name: '',
    artist_id: null
  })

  const [formValues, setFormValues] = useState({
    search: 'Name',
    type: 'featured'
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const song_id = props.song_id
      let name = artistValues.name
      const artist_id = artistValues.artist_id
      const type = formValues.type
      if (hasID.id) {
        name = artistValues.name
      }
      else {
        name = formValues.search
      }

      setIsSubmitted({ submitted: true })

      const params = {
        song_id: song_id,
        name: name,
        artist_id: artist_id,
        type: type
      }
      axios.post('/api/edit/new_songs_credits', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
    }
  )

  const handleClick = React.useCallback(
    (result) => {
      const { id, name } = result
      setHasID({ id: true })
      setArtistValues({
        artist_id: id,
        name: name
      })
      searchRef.current.focus()
      console.log('clicked')
      console.log()
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
        artist_id: null,
        name: ''
      })
    }
  )


  return (
    <form>
      <div>
        <div className='input-container'>
          {hasID.id ? <div>{artistValues.name}<button type='button' onClick={handleClear}>Clear</button></div> :
            <div className='artist-search-stuff'>
              <label className='input-label'>Name</label>
              <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
              <DropDownArtist search={formValues.search} handleClick={handleClick}></DropDownArtist>
            </div>
          }
        </div>
        <div className='input-container'>
          <label className='input-label'>Type</label>
          <select
            name='type'
            onChange={handleChange}
            value={formValues.type}>
            <option value='featured'>Featured</option>
            <option value='lyricist'>Lyricist</option>
            <option value='composer'>Composer</option>
            <option value='arranger'>Arranger</option>
          </select>
        </div>
      </div>
      <div className='input-container'>
        {isSubmitted.submitted ? <span>Submitted.</span> : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
      </div>
    </form>
  )
}

export default NewCredit