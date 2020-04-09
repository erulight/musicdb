import React, { useState, useEffect } from 'react'
import image2 from '../../assets/images/album_art.jpg'
import axios from 'axios'
import { prettyDate } from '../../utils/dateutils'
import { useParams, Link } from 'react-router-dom'
import SongAlbum from './SongAlbum'
import SongCredit from './SongCredit'

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

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/song/artists')
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

  const RenderSong = (props) => {
    const artist = findArtist(song.artist_id)
    return (
      <div className="song-page">
        <div className="song-info-container">
          <div className="song-album-art-container">
            <img className="album-art" src={image2}></img>
          </div>
          <div className="song-info">
            <span>
              <h1>{song.title}</h1>
              </span>
            <p>By: <Link to={`/artist/${artist.id}`}>{artist.name}</Link> <SongCredit song_id={song.id} type={'featured'}></SongCredit></p>
            <p>Release Date: {prettyDate(song.release_date)}</p>
            <p>On Album:</p>
            <SongAlbum song_id = {song.id}></SongAlbum>
          </div>
          <div className="song-about-container">
            <h2>Credits</h2>
            <p>Lyrics: <SongCredit song_id={song.id} type={'lyricist'}></SongCredit></p>
            <p>Composer: <SongCredit song_id={song.id} type={'composer'}></SongCredit></p>
            <p>Arrangement: <SongCredit song_id={song.id} type={'arranger'}></SongCredit></p>
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