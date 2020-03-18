import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ArtistAlbumSongs = (props) => {
  const album_id = props.album_id
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get('/api/artist/tracks/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setTracks(res.data)
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
    tracks.map((track) => {
      return (
        <div key={track.id} className="song-container-row">
          <div className="song-cell1">{track.number}</div>
          <div className="song-cell2">
            <span><Link to={`/song/${track.song_id}`}>{track.title}</Link></span>
              { /*song.ft_artist_id 
              ? <span> ft. <Link to={`/artist/${song.ft_artist_id}`}>{findArtist(song.ft_artist_id).name}</Link></span>
              : null */}
            </div>
          <div className="song-cell3">
            <span>Lyrics: <Link to={`/artist/`}>{/*findArtist(song.lyrics_id).name*/}</Link> </span> 
            <span>Composer: <Link to={`/artist/`}>{/*findArtist(song.composer_id).name*/}</Link> </span> 
            <span>Arrangement: <Link to={`/artist/`}>{/*findArtist(song.arrangement_id).name*/}</Link> </span>
            </div>
        </div>
      )
    }
    )
  )
}

export default ArtistAlbumSongs