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
import { Link } from 'react-router-dom'

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

  if (albums[0] != null) {
    hasReleases = true
    amountAlbums = albums.length - 1
    active_date_end = albums[0].release_date
    active_date_start = albums[amountAlbums].release_date
  }

  if (artist.is_group) {
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
        <div className='title-container2'>
          <h1 className='title-text'>Artist</h1>
        </div>
        <div className="artist-profile-container">
          <div className="artist-profile-portrait-container">
            <img className="artist-profile-portrait-img" src={image}></img>
          </div>
          <div className="artist-profile-name-container">
            <div className='name-container'>
              <h1 className='name-text'>{artist.name}</h1>
            </div>
            <div className='list-container2'>
              <p>{!isGroup
                ? <span>Real Name: {artist.real_name}</span>
                : null}
              </p>
              <p>{isGroup
                ? <span><h2>Members:</h2><ArtistMembers artist_id={artist.id}></ArtistMembers><p><Link to={`/edit/members/${artist.id}`}>Edit</Link></p></span>
                : null}</p>
            </div>
          </div>
          <div className='list-container2'>
            <div className="artist-profile-info-container">
              <h2>About</h2>
              <p>{hasReleases
                ? <span>Years Active: {prettyYear(active_date_start)} - {artist.active_status
                  ? <span>Present</span>
                  : <span>{prettyYear(active_date_end)}</span>}
                </span>
                : null}</p>
              <p>{/* Latest Release*/}</p>
              <p>{!isGroup
                ? <span>Born: {prettyDate(artist.birthdate)} (age {getAgeFromBirthday(artist.birthdate)})</span>
                : null}</p>
              <p><Link to={`/edit/artist/${artist.id}`}>Edit</Link></p>
            </div>
          </div>
        </div>
        <div className="artist-header">
          <div className='header-container2'>
            <h2 className='header-text'>
              Albums
          </h2>
          </div>
          <ArtistAlbum artist_id={artist_id}></ArtistAlbum>
        </div>
        <div className="artist-header">
          <div className='header-container'>
            <h2 className='header-text'>
              Songs As Featured Artist
          </h2>
          </div>
          <div className='list-container3'>
          <ArtistSongsFt artist_id={artist.id}></ArtistSongsFt>
          </div>
        </div>
        <div className="artist-header">
          <div className='header-container'>
            <h2 className='header-text'>
              Songs As Lyricist
          </h2>
          </div>
          <div className='list-container3'>
            <ArtistSongsLyrics artist_id={artist.id}></ArtistSongsLyrics>
          </div>
        </div>
        <div className="artist-header">
          <div className='header-container'>
            <h2 className='header-text'>
              Songs As Composer
          </h2>
          </div>
          <div className='list-container3'>
            <ArtistSongsComposer artist_id={artist.id}></ArtistSongsComposer>
          </div>
        </div>
        <div className="artist-header">
          <div className='header-container'>
            <h2 className='header-text'>
              Songs As Arranger
          </h2>
          </div>
          <div className='list-container3'>
            <ArtistSongsArranger artist_id={artist.id}></ArtistSongsArranger>
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