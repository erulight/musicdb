import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import { useParams } from 'react-router-dom'
import NewMember from './EditArtistAddNewMember'
import NewTrack from './NewTrack'
import EditAlbumExistingTrackList from './EditAlbumExistingTrackList'

const EditTracks = () => {

  const params = useParams()
  console.log(params)
  const album_id = params.id;

  //const members_array = new Array().fill(undefined)

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

  /*
      members_array.map((member, i) => {
      return(
        <div key={i}>
          <label>Name:</label>
          <input name={`membername-${i}`} onChange={props.handleChange} value={props.formValues[`membername-${i}`]} autoComplete='off'></input>
          <label>Position:</label>
          <input name={`memberpos-${i}`} onChange={props.handleChange} value={props.formValues[`memberpos-${i}`]} autoComplete='off'></input>
        </div>
      )
    })
    */

  return (
    <div>
      <h1>Edit Tracks</h1>
      <h2>{album.title}</h2>
      <h1>Existing Tracks</h1>
      <EditAlbumExistingTrackList album_id={album_id}/>
      <h1>New Track</h1>
      <NewTrack album_id={album_id}/>
    </div>
  )
}

export default EditTracks