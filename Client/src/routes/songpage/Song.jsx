import React, { useState, useEffect } from 'react'
import image2 from '../../assets/images/album_art.jpg'
import '../../assets/scss/song.scss'
import axios from 'axios'
//import ArtistAlbum from './ArtistAlbum.jsx'
import { prettyDate } from '../../utils/dateutils'
import { useParams, Link } from 'react-router-dom'

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

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/song/albums')
      .then((res) => {
        console.log(res)
        setAlbums(res.data)
      })
  }, []
  )

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/song/artists')
      .then((res) => {
        console.log(res)
        setArtists(res.data)
      })
  }, []
  )

  const findAlbum = (album_id) => {
    //console.log(album_id)
    const album = albums.find((album) => { return album.id === album_id })
    return album || {}
  }
  if (!albums.length) return null

  const findArtist = (artist_id) => {
    //console.log(artist_id)
    const artist = artists.find((artist) => { return artist.id === artist_id })
    return artist || {}
  }
  console.log(artists)
  if (!artists.length) return null

  const RenderSong = (props) => {
    const artist = findArtist(findAlbum(song.album_id).artist_id)
    return (
      <div className="song-page">
        <div className="song-info-container">
          <div className="song-album-art-container">
            <img className="album-art" src={image2}></img>
          </div>
          <div className="song-info">
            <h1>{song.title}</h1>
            <p>Seen on Album: <Link to={`/album/${song.album_id}`}>{findAlbum(song.album_id).title}</Link> By: <Link to={`/artist/${artist.id}`}>{artist.name}</Link></p>
            <p>Release Date: {prettyDate(findAlbum(song.album_id).release_date)}</p>
          </div>
          <div className="song-about-container">
            <h2>Credits</h2>
            <p>Lyrics: <Link to={`/artist/${song.lyrics_id}`}>{findArtist(song.lyrics_id).name}</Link></p>
            <p>Composer: <Link to={`/artist/${song.composer_id}`}>{findArtist(song.composer_id).name}</Link></p>
            <p>Arrangement: <Link to={`/artist/${song.arrangement_id}`}>{findArtist(song.arrangement_id).name}</Link></p>
          </div>
        </div>
        <div className="lyrics-section">
          <h2>
            Lyrics
          </h2>
        </div>
        You thought there would be lyrics here, but there aren't any. (Intentional)
      </div>

    )
  }
  return (
    <RenderSong></RenderSong>
  )
}

export default Song