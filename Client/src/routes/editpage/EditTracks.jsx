import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NewTrack from './NewTrack'
import EditAlbumExistingTrackList from './EditAlbumExistingTrackList'

/**
 * Renders the Edit Tracks Page
 */
const EditTracks = () => {

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
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get('/api/edit/tracks/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setTracks(res.data)
      })
  }, [album_id]
  )

  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>Edit Tracks</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>{album.title}</h2>
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Existing Tracks</h1>
      </div>
      <div className='list-container'>
      <EditAlbumExistingTrackList album_id={album_id} />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>New Track</h1>
      </div>
      <div className='list-container'>
      <NewTrack album_id={album_id} />
      </div>
    </div>
  )
}

export default EditTracks