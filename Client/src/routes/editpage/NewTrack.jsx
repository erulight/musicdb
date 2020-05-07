import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import DropDownSong from '../../utils/DropDownSong'


const NewTrack = (props) => {

  const searchRef = React.useRef(null)

  const [songValues, setSongValues] = useState({
    title: '',
    song_id: null
  })

  const [formValues, setFormValues] = useState({
    search: 'Name',
    number: 'Position'
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const number = formValues.number
      let title = songValues.title
      const song_id = songValues.song_id
      const album_id = props.album_id
      if (hasID.id) {
        title = songValues.title
      }
      else {
        title = formValues.search
      }

      setIsSubmitted({ submitted: true })

      const params = {
        number: number,
        title: title,
        song_id: song_id,
        album_id: album_id
      }
      axios.post('/api/edit/new_tracks', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(title)
    }
  )

  const handleClick = React.useCallback(
    (result) => {
      const { id, title } = result
      setHasID({ id: true })
      setSongValues({
        song_id: id,
        title: title
      })
      searchRef.current.focus()
      console.log('clicked')
      console.log(id + title)
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
      setSongValues({
        song_id: null,
        title: ''
      })
    }
  )


  return (
    <form>
      <div>
        {hasID.id ? <div>{songValues.title}<button type='button' onClick={handleClear}>Clear</button></div> :
          <div className='artist-search-stuff'>
            <label>Title</label>
            <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
            <DropDownSong search={formValues.search} handleClick={handleClick}></DropDownSong>
          </div>
        }
        <label>Track Number</label>
        <input name='number' type='number' min='1' step='1' value={formValues.number} onChange={handleChange} autoComplete='off' />
      </div>
      <div>
        {isSubmitted.submitted ? <span>Submitted.</span> : <button type='button' onClick={handleSubmit}>Submit</button>}
      </div>
    </form>
  )
}


export default NewTrack