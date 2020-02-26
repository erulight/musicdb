import React, { useState, useEffect } from 'react'
import image from './assets/images/artist_profile_pic.jpg'
import './assets/scss/artist.scss'
import axios from 'axios'
import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate } from './utils/dateutils'
import { useParams } from 'react-router-dom'

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
        <div className="artist-albums">
          <h2>
            Albums
          </h2>
          <ArtistAlbum artist_id={artist_id}></ArtistAlbum>
        </div>
      </div>
    )
  }
  return (
    <RenderArtistProfile></RenderArtistProfile>
  )
}

export default ArtistProfile