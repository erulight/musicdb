import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditExistingTrack from './EditExistingTrack'

/**
 * Renders a list of the Existing Tracks on a particular Album on the Edit Album Tracks page
 * @param {Object} props properties passed to component
 * - album_id {Number} id of album
 */
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