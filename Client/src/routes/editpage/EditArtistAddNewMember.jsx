import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'

const NewMember = (props) => {

  const searchRef = React.useRef(null)

  const [artistValues, setArtistValues] = useState({
    name: '',
    artist_id: null
  })

  const [formValues, setFormValues] = useState({
    search: 'Name',
    position: 'Position'
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const position = formValues.position
      let name = artistValues.name
      const artist_id = artistValues.artist_id
      const member_of_id = props.artist_id
      if (hasID.id) {
        name = artistValues.name
      }
      else {
        name = formValues.search
      }

      setIsSubmitted({ submitted: true })

      const params = {
        position: position,
        name: name,
        artist_id: artist_id,
        member_of_id: member_of_id
      }
      axios.post('/api/edit/new_members', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(position + name)
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


  return (
    <form>
      <div>
        {hasID.id ? <div>{artistValues.name}<button type='button' onClick={handleClear}>Clear</button></div> :
          <div className='artist-search-stuff'>
            <label>Name</label>
            <div className='artist-search-bar'><input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' ref={searchRef} /></div>
            <DropDownArtist search={formValues.search} handleClick={handleClick}></DropDownArtist>
          </div>
        }
        <label>Position</label>
        <input name='position' value={formValues.position} onChange={handleChange} autoComplete='off' />
      </div>
      <div>
        {isSubmitted.submitted ? <span>Submitted.</span> : <button type='button' onClick={handleSubmit}>Submit</button>}
      </div>
    </form>
  )
}

export default NewMember