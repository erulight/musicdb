import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'

const EditExistingCredit = (props) => {
  const credit = props.credit

  const searchRef = React.useRef(null)

  const [formValues, setFormValues] = useState({
    search: credit.name,
    type: credit.type
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [isediting, set_isediting] = useState({
    editing: false
  })

  const [artistValues, setArtistValues] = useState({
    name: '',
    artist_id: null
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const type = formValues.type
      let name = artistValues.name
      const artist_id = artistValues.artist_id
      const credit_id = credit.id
      const song_id = credit.song_id
      if (hasID.id) {
        name = artistValues.name
      }
      else {
        name = formValues.search
      }

      setIsSubmitted({ submitted: true })

      const params = {
        type: type,
        name: name,
        artist_id: artist_id,
        credit_id: credit_id,
        song_id: song_id
      }
      axios.post('/api/edit/edit_credits', params)
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
        artist_id: null,
        name: ''
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
                <div>
                </div>
                {isSubmitted.submitted ? <span>Submitted.</span>
                  :
                  <div className='input-container'>
                    <button className='button' type='button' onClick={handleSubmit}>Submit</button>
                    <button className='button-edit' type='button' onClick={handleCancelEdit}>Cancel Editing</button>
                  </div>
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

export default EditExistingCredit