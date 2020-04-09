import React, { useState, useEffect } from 'react'
import image from '../../assets/images/artist_profile_pic.jpg'
import axios from 'axios'
import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate, prettyYear } from '../../utils/dateutils'
import { useParams } from 'react-router-dom'
import ArtistSongsFt from './ArtistSongsFt'
import ArtistSongsLyrics from './ArtistSongsLyrics'
import ArtistSongsComposer from './ArtistSongsComposer'
import ArtistSongsArranger from './ArtistSongsArrangement'
import ArtistMembers from './ArtistMembers'

const ArtistProfile = () => {
  let isGroup = false
  let hasReleases = false
  let amountAlbums = 0
  let active_date_start = new Date()
  let active_date_end = new Date()
  let age = 0

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

  console.log(artist)

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/artist/members/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, [artist_id]
  )

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/artist/albums/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setAlbums(res.data)
      })
  }, [artist_id]
  )

  if(albums[0] != null){
    hasReleases = true
    amountAlbums = albums.length-1
    active_date_end = albums[0].release_date
    active_date_start = albums[amountAlbums].release_date
  }

  if(members[0] != null) {
    isGroup = true
  }

  function getAgeFromBirthday(birthday = new Date()) {
    const birthdate = Date.parse(birthday)

    if (!birthdate) {
      throw new Error('Birthday is not a valid date.')
      return
    }

    return parseInt((Date.now() - birthdate) / 1000 / 60 / 60 / 24 / 7 / 52)
  }
  // age = parseInt((Date.now() - dob) / 1000 / 60 / 60 / 24 / 7 / 52)

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
            <p>{hasReleases
            ? <span>Years Active: {prettyYear(active_date_start)} - {artist.active_status 
                                                                    ? <span>Present</span>
                                                                    : <span>{prettyYear(active_date_end)}</span>}
              </span>
            : null}</p>
            <p>{/* Latest Release*/}</p>
            <p>{artist.birthdate
              ? <span>Born: {prettyDate(artist.birthdate)} (age {getAgeFromBirthday(artist.birthdate)})</span>
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