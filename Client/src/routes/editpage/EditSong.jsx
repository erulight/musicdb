import React, { useState, useEffect } from 'react'
import image from '../../assets/images/artist_profile_pic.jpg'
import axios from 'axios'
import { prettyDate, prettyYear, inputDate } from '../../utils/dateutils'
import { useParams } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'

const EditSong = () => {

  const searchRef = React.useRef(null)

  const params = useParams()
  console.log(params)
  const song_id = params.id;

  const [song, setSong] = useState({})
  useEffect(() => {
    axios.get('/api/edit/songs/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setSong(res.data[0])
      })
  }, [song_id]
  )

  const [artistValues, setArtistValues] = useState({
    artist_name: params.artist_name,
    artist_id: params.artist_id
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  console.log(song)

  const [formValues, setFormValues] = useState({
    title: song.title,
    search: song.artist_name,
    release_date: song.release_date,
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

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const title = formValues.title
      let artist_name = formValues.artist_name
      const release_date = formValues.release_date
      const song_id = song.id
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
        artist_name: artist_name,
        release_date: release_date,
        song_id: song_id,
        artist_id: artist_id
      }
      axios.post('/api/edit/edit_songs', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
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

  const handleClear = React.useCallback(
    (event) => {
      setHasID({ id: false })
      setArtistValues({
        artist_name: '',
        artist_id: null,
      })
    }
  )


  React.useEffect(() => {
    setFormValues({
      title: song.title,
      search: song.artist_name,
      release_date: song.release_date,
    })
  }, [song.title, song.artist_name, song.release_date])

  React.useEffect(() => {
    setHasID({
      id: Boolean(song.id)
    })
    setArtistValues({
      artist_name: song.artist_name,
      artist_id: song.artist_id
    })
  }, [song.id, song.artist_name, song.artist_id])



  return (
    <div className='page-container'>
      <form>
        <div className='title-container'>
          <h1 className='title-text'>Edit Song</h1>
        </div>
        <div className='list-container'>
        <div className='existing-info'>Title: {song.title}</div>
        <div className='existing-info'>Artist: {song.artist_name}</div>
        <div className='existing-info'>Release Date: {prettyDate(song.release_date)}</div>
        </div>
        <div className='list-container'>
          <div className='input-container'>
            <label className='input-label'>Title:</label>
            <input name='name' value={formValues.title} onChange={handleChange} autoComplete='off'></input>
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
            <label className='input-label'>Release Date:</label>
            <input type='date' name='release_date' value={inputDate(formValues.release_date)} onChange={handleChange} ></input>
          </div>
          <div className='input-container'>
            {isSubmitted.submitted ? <span>Submitted.</span> : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </form>
    </div>
  )
}


export default EditSong