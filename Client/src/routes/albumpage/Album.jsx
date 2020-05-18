import React, { useState, useEffect } from 'react'
import image from '../../assets/images/album_art.jpg'
import axios from 'axios'
import AlbumSongs from './AlbumSongs'
import { prettyDate } from '../../utils/dateutils'
import { useParams, Link } from 'react-router-dom'

/**
 * Renders the Album Page
 */
const Album = () => {
  const params = useParams()
  console.log(params)
  const album_id = params.id;
  const [album, setAlbum] = useState({})
  useEffect(() => {
    axios.get('/api/album/albums/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setAlbum(res.data[0])
      })
  }, [album_id]
  )

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/album/artists')
      .then((res) => {
        console.log(res)
        setArtists(res.data)
      })
  }, []
  )

  const findArtist = (artist_id) => {
    //console.log(artist_id)
    const artist = artists.find((artist) => { return artist.id === artist_id })
    return artist || {}
  }
  console.log(artists)
  if (!artists.length) return null

  const RenderAlbum = (props) => {
    return (
      <div className="album-page">
        <div className='title-container2'>
          <h1 className='title-text'>Album</h1>
        </div>
        <div className="album-profile-container">
          <div className="album-art-container">
            <img className="album-art" src={image}></img>
          </div>
          <div className="album-title-container">
            <div className='name-container'>
              <h1 className='name-text'>{album.title}</h1>
            </div>
            <div className='list-container2'>
              <p>By: <Link to={`/artist/${album.artist_id}`}>{findArtist(album.artist_id).name}</Link></p>
            </div>
          </div>
          <div className='list-container2'>
            <div className="artist-about-container">
              <h2>About</h2>
              <p>Release Date: {prettyDate(album.release_date)}</p>
              <p><Link to={`/edit/album/${album.id}`}>Edit</Link></p>
            </div>
          </div>
        </div>
        <div className="album-songs">
          <p><Link to={`/edit/tracks/${album.id}`}>Edit</Link></p>
          <div className='header-container2'>
            <h2 className='header-text'>
              Tracklist
          </h2>
          </div>
        </div>
        <div className="song-container">
          <div className="song-container-headers-container">
            <div className="song-container-headers">#</div>
            <div className="song-container-headers">Title</div>
            <div className="song-container-headers">Credits</div>
          </div>
          <AlbumSongs album_id={album.id}></AlbumSongs>
        </div>
      </div>
    )
  }
  return (
    <RenderAlbum></RenderAlbum>
  )
}

export default Album