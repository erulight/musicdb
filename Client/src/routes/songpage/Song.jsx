import React, { useState, useEffect } from 'react'
import image2 from '../../assets/images/album_art.jpg'
import axios from 'axios'
import { prettyDate } from '../../utils/dateutils'
import { useParams, Link } from 'react-router-dom'
import SongAlbum from './SongAlbum'
import SongCredit from './SongCredit'

/**
 * Renders the Song Page
 */
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
        <div className='title-container2'>
          <h1 className='title-text'>Song</h1>
        </div>
        <div className="song-info-container">
          <div className="song-album-art-container">
            <img className="album-art" src={image2}></img>
          </div>
          <div className="song-info">
            <div className='name-container'>
              <h1 className='name-text'>{song.title}</h1>
            </div>
            <div className='list-container2'>
              <p>By: <Link to={`/artist/${song.artist_id}`}>{song.artist_name}</Link> <SongCredit song_id={song.id} type={'featured'}></SongCredit></p>
              <p>Release Date: {prettyDate(song.release_date)}</p>
              <p>On Album:</p>
              <SongAlbum song_id={song.id}></SongAlbum>
              <p><Link to={`/edit/song/${song.id}`}>Edit</Link></p>
            </div>
          </div>
          <div className='list-container2'>
            <div className="song-about-container">
              <h2>Credits</h2>
              <p>Lyrics: <SongCredit song_id={song.id} type={'lyricist'}></SongCredit></p>
              <p>Composer: <SongCredit song_id={song.id} type={'composer'}></SongCredit></p>
              <p>Arrangement: <SongCredit song_id={song.id} type={'arranger'}></SongCredit></p>
              <p><Link to={`/edit/credits/${song.id}`}>Edit</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <RenderSong></RenderSong>
  )
}

export default Song