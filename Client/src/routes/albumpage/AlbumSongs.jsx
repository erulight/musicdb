import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { prettyYear } from '../../utils/dateutils'
import { Link } from 'react-router-dom'
import AlbumSongCredit from './AlbumSongCredit'

const AlbumSongs = (props) => {
  const album_id = props.album_id
  const [songs, setSongs] = useState([])
  
  useEffect(() => {
    axios.get('/api/album/tracks/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setSongs(res.data)
      })
  }, []
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

  return (
    songs.map((song) => {
      return (
        <div key={song.id} className="song-container-row">
          <div className="song-cell1">{song.number}</div>
          <div className="song-cell2">
            <span>{<Link to={`/song/${song.song_id}`}>{song.title}</Link>} 
            <AlbumSongCredit song_id={song.id} type={'featured'}></AlbumSongCredit>
            </span>
          </div>
          <div className="song-cell3">
            <span>Lyrics: {<AlbumSongCredit song_id={song.id} type={'lyricist'}></AlbumSongCredit>}</span>
            <span> Composer: {<AlbumSongCredit song_id={song.id} type={'composer'}></AlbumSongCredit>}</span>
            <span> Arrangement: {<AlbumSongCredit song_id={song.id} type={'arranger'}></AlbumSongCredit>}</span>
          </div>
        </div>
      )
    }
    )
  )
}

export default AlbumSongs