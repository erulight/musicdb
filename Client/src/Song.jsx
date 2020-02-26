import React, { useState, useEffect } from 'react'
import image from './assets/images/artist_profile_pic.jpg'
//import './assets/scss/artist.scss'
import axios from 'axios'
//import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate } from './utils/dateutils'
import { useParams } from 'react-router-dom'

const Song = () => {
  const params = useParams()
  console.log(params)
  const song_id = params.id;
  const [song, setSong] = useState({})
  useEffect(() => {
    axios.get('/api/song/songs/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setSong(res.data[0])
      })
  }, [song_id]
  )

  const RenderSong = (props) => {
    return (
      <div className="song-page">
        <div className="song-info-container">
          <div className="song-album-art-container">
            <img className="album-art" src={image}></img>
          </div>
          <div className="artist-profile-name-container">
            <h1>{song.song_title}</h1>
            <p>From Album: TODO: find album{/*artist.real_name*/}</p>
          </div>
          <div className="artist-profile-info-container">
            <h2>About</h2>
            <p></p>
            <p></p>
            <p>Release Date: TODO: find album{/*prettyDate(artist.birthdate)*/}</p>
          </div>
        </div>
        <div className="lyrics-section">
          <h2>
            Lyrics
          </h2>
          You thought there would be lyrics here, but there aren't any. (Intentional)
        </div>
      </div>

    )
  }
  return (
    <RenderSong></RenderSong>
  )
}

export default Song