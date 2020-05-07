import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'
import EditExistingMember from './EditExistingMember'
import EditExistingTrack from './EditExistingTrack'

const EditAlbumExistingTrackList = (props) => {

  const album_id = props.album_id

  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get('/api/edit/tracks/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setTracks(res.data)
      })
  }, [album_id]
  )

  /*
  const searchRef = React.useRef(null)

  const [formValues, setFormValues] = useState({
    name: 'Name',
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
  */


  return (
    tracks.map((track) => {
      return (
        <div className='existing-info' key={track.id}>
          {track.number} {track.title}
          <EditExistingTrack track={track}/>
        </div>
      )
    })
  )
}

export default EditAlbumExistingTrackList