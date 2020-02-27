import React, { useState, useEffect } from 'react'
import image from './assets/images/artist_profile_pic.jpg'
import './assets/scss/artist.scss'
import axios from 'axios'
import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate } from './utils/dateutils'
import { useParams } from 'react-router-dom'
import ArtistSongsFt from './ArtistSongsFt'
import ArtistSongsLyrics from './ArtistSongsLyrics'
import ArtistSongsComposer from './ArtistSongsComposer'
import ArtistSongsArranger from './ArtistSongsArrangement'

const ArtistProfile = () => {
  const params = useParams()
  console.log(params)
  const artist_id = params.id;
  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/artist/artists/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, [artist_id]
  )

  const RenderArtistProfile = (props) => {
    return (
      <div className="artist-page">
        <div className="artist-profile-container">
          <div className="artist-profile-portrait-container">
            <img className="artist-profile-portrait-img" src={image}></img>
          </div>
          <div className="artist-profile-name-container">
            <h1>{artist.artist_name}</h1>
            <p>Real Name: {artist.real_name}</p>
          </div>
          <div className="artist-profile-info-container">
            <h2>About</h2>
            <p>{/* First Release*/}</p>
            <p>{/* Latest Release*/}</p>
            <p>Birthday: {prettyDate(artist.birthdate)}</p>
          </div>
        </div>
        <div className="artist-header">
          <h2>
            Albums
          </h2>
          <ArtistAlbum artist_id={artist_id}></ArtistAlbum>
        </div>
        <div className="artist-header">
          <h2>
            Songs As Featured Artist
          </h2>
          <ArtistSongsFt artist_id={artist.id}></ArtistSongsFt>
        </div>
        <div className="artist-header">
          <h2>
            Songs As Lyricist
          </h2>
          <ArtistSongsLyrics artist_id={artist.id}></ArtistSongsLyrics>
        </div>
        <div className="artist-header">
          <h2>
            Songs As Composer
          </h2>
          <ArtistSongsComposer artist_id={artist.id}></ArtistSongsComposer>
        </div>
        <div className="artist-header">
          <h2>
            Songs As Arranger
          </h2>
          <ArtistSongsArranger artist_id={artist.id}></ArtistSongsArranger>
        </div>
      </div>
    )
  }
  return (
    <RenderArtistProfile></RenderArtistProfile>
  )
}

export default ArtistProfile