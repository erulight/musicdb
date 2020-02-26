import React, { useState, useEffect } from 'react'
import image from './assets/images/album_art.jpg'
import './assets/scss/album.scss'
import axios from 'axios'
import AlbumSongs from './AlbumSongs'
import { prettyDate } from './utils/dateutils'
import { useParams, Link } from 'react-router-dom'

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
        <div className="album-info-container">
          <div className="album-art-container">
            <img className="album-art" src={image}></img>
          </div>
          <div className="album-title-container">
            <h1>{album.album_title}</h1>
            <p>By: <Link to={`/artist/${album.artist_id}`}>{findArtist(album.artist_id).artist_name}</Link></p>
          </div>
          <div className="album-about-container">
            <h2>About</h2>
            <p>Release Date: {prettyDate(album.release_date)}</p>
          </div>
        </div>
        <div className="album-songs">
          <h2>
            Tracklist
          </h2>
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