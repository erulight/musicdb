import React, { useState, useEffect } from 'react'
import image from '../../assets/images/artist_profile_pic.jpg'
import axios from 'axios'
import { prettyDate, prettyYear, inputDate } from '../../utils/dateutils'
import { useParams } from 'react-router-dom'
import DropDownArtist from '../../utils/DropDownArtist'

/**
 * Renders the Edit Album page
 */
const EditAlbum = () => {

  const searchRef = React.useRef(null)

  const params = useParams()
  console.log(params)
  const album_id = params.id;

  const [album, setAlbum] = useState({})
  useEffect(() => {
    axios.get('/api/edit/albums/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setAlbum(res.data[0])
      })
  }, [album_id]
  )

  const [artistValues, setArtistValues] = useState({
    artist_name: params.artist_name,
    artist_id: params.artist_id
  })

  const [hasID, setHasID] = useState({
    id: false
  })

  console.log(album)

  const [formValues, setFormValues] = useState({
    title: album.title,
    search: album.artist_name,
    release_date: album.release_date,
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
      const album_id = album.id
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
        album_id: album_id,
        artist_id: artist_id
      }
      axios.post('/api/edit/edit_albums', params)
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
      title: album.title,
      search: album.artist_name,
      release_date: album.release_date,
    })
  }, [album.title, album.artist_name, album.release_date])

  React.useEffect(() => {
    setHasID({
      id: Boolean(album.id)
    })
    setArtistValues({
      artist_name: album.artist_name,
      artist_id: album.artist_id
    })
  }, [album.id, album.artist_name, album.artist_id])



  return (
    <div className='page-container'>
      <form>
        <div className='title-container'>
          <h1 className='title-text'>Edit Album</h1>
        </div>
        <div className='list-container'>
          <div className='existing-info'>Title: {album.title}</div>
          <div className='existing-info'>Artist: {album.artist_name}</div>
          <div className='existing-info'>Release Date: {prettyDate(album.release_date)}</div>
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


export default EditAlbum