import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownSong from '../../utils/DropDownSong'

const EditExistingTrack = (props) => {
  const track = props.track

  const searchRef = React.useRef(null)

  const [formValues, setFormValues] = useState({
    search: track.title,
    number: track.number
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [songValues, setSongValues] = useState({
    title: '',
    song_id: null
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const number = formValues.number
      let title = songValues.title
      const song_id = songValues.song_id
      const track_id = track.id
      const album_id = track.album_id
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
        track_id: track_id,
        album_id: album_id
      }
      axios.post('/api/edit/edit_tracks', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log()
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

  const handleEdit = React.useCallback((event) => { set_isediting({ editing: true }) })

  const handleCancelEdit = React.useCallback((event) => { set_isediting({ editing: false }) })



  return (
    <form>
      <div>
        {isSubmitted.submitted ? <span>Submitted.</span> : <span>
          {isediting.editing ?
            <div>
              <div className='input-container'>
                {hasID.id ? <div>{songValues.title}<button type='button' onClick={handleClear}>Clear</button></div> :
                  <div className='artist-search-stuff'>
                    <label className='input-label'>title</label>
                    <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
                    <DropDownSong search={formValues.search} handleClick={handleClick}></DropDownSong>
                  </div>
                }
              </div>
              <label className='input-label'>Track Number</label>
              <input name='number' type='number' min='1' step='1' value={formValues.number} onChange={handleChange} autoComplete='off' />
              <div className='input-container'>
                {isSubmitted.submitted ? <span>Submitted.</span>
                  : <span>
                    <button className='button' type='button' onClick={handleSubmit}>Submit</button>
                    <button className='button-edit' type='button' onClick={handleCancelEdit}>Cancel Editing</button>
                  </span>
                }
              </div>
            </div>
            :
            <div className='input-container'>
              <button className='button-edit' type='button' onClick={handleEdit}>Edit</button>
            </div>
          }
        </span>
        }
      </div>
    </form>
  )
}

export default EditExistingTrack