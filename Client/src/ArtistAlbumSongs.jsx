import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ArtistAlbumSongs = (props) => {
  const album_id = props.album_id
  const [songs, setSongs] = useState([])
  useEffect(() => {
    axios.get('/api/artist/songs/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setSongs(res.data)
      })
  }, []
  )

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/artist/artists')
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
          <div className="song-cell1">{song.track_number}</div>
          <div className="song-cell2">
            <span><Link to={`/song/${song.id}`}>{song.song_title}</Link></span>
              {song.ft_artist 
              ? <span> ft. <Link to={`/artist/${song.ft_artist}`}>{findArtist(song.ft_artist).artist_name}</Link></span>
              : null }
            </div>
          <div className="song-cell3">
            <span>Lyrics: <Link to={`/artist/${song.lyrics}`}>{findArtist(song.lyrics).artist_name}</Link> </span> 
            <span>Composer: <Link to={`/artist/${song.composer}`}>{findArtist(song.composer).artist_name}</Link> </span> 
            <span>Arrangement: <Link to={`/artist/${song.arrangement}`}>{findArtist(song.arrangement).artist_name}</Link> </span>
            </div>
        </div>
      )
    }
    )
  )
}

export default ArtistAlbumSongs