import React, { useState, useEffect } from 'react'
import image from '../../assets/images/artist_profile_pic.jpg'
import '../../assets/scss/artist.scss'
import axios from 'axios'
import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate } from '../../utils/dateutils'
import { useParams } from 'react-router-dom'
import ArtistSongsFt from './ArtistSongsFt'
import ArtistSongsLyrics from './ArtistSongsLyrics'
import ArtistSongsComposer from './ArtistSongsComposer'
import ArtistSongsArranger from './ArtistSongsArrangement'
import ArtistMembers from './ArtistMembers'

const ArtistProfile = () => {
  let isGroup = false
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

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/artist/members/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, [artist_id]
  )
  if(members[0] != null) {
    isGroup = true
  }

  const RenderArtistProfile = (props) => {
    return (
      <div className="artist-page">
        <div className="artist-profile-container">
          <div className="artist-profile-portrait-container">
            <img className="artist-profile-portrait-img" src={image}></img>
          </div>
          <div className="artist-profile-name-container">
            <h1>{artist.name}</h1>
            <p>{artist.real_name
              ? <span>Real Name: {artist.real_name}</span>
              : null}
            </p>
            <p>{isGroup
              ? <span><h2>Members:</h2><ArtistMembers artist_id={artist.id}></ArtistMembers></span>
              : null}</p>
          </div>
          <div className="artist-profile-info-container">
            <h2>About</h2>
            <p>{/* First Release*/}</p>
            <p>{/* Latest Release*/}</p>
            <p>{artist.birthdate
              ? <span>Birthday: {prettyDate(artist.birthdate)}</span>
              : null}</p>
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