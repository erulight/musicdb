import React, { useState, useEffect } from 'react'
import image from './assets/images/artist_profile_pic.jpg'
import './assets/scss/artist.scss'
import axios from 'axios'

const members = ['jim', 'bob', 'george']

const ArtistProfile = () => {
  const [artist,setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/artists')
    .then((res) => {
      console.log(res)
      setArtist(res.data[0])
    })
  })


  const RenderArtistProfile = (props) => {
    return (
      <div className="artist-page">
        <div className="artist-profile-container">
          <div className="artist-profile-portrait-container">
            <img className="artist-profile-portrait-img" src={image}></img>
          </div>
          <div className="artist-profile-name-container">
            <h1>{artist.artist_name}</h1>
            <p>Members</p>
            <ul>{members.map((member) => {
              return (
                <li>{member}</li>
              )
            })}</ul>
          </div>
          <div className="artist-profile-info-container">
            <h2>Artist Info</h2>
            <p>Active Date: DEBUT SONG DATE - PRESENT</p>
            <p>Latest Release: ALBUM DATE</p>
        </div>
        </div>
        <div className="artist-albums">
          <h2>
            Albums
          </h2>
          <div className="artist-album-container">
            <p className="placeholder-album-art">Album Art</p>
            <div className="album-info-container">
              <h3>Album Title (Year)</h3>
              <p>track list</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <RenderArtistProfile></RenderArtistProfile>
  )
}

export default ArtistProfile