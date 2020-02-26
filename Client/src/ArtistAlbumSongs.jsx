import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ArtistAlbumSongs = (props) => {
  const album_id = props.album_id
  const [songs, setSongs] = useState([])
  useEffect(() => {
    axios.get('/api/get/songs/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setSongs(res.data)
      })
  }, []
  )

  const [artists, setArtists] = useState([])
  useEffect(() => {
    axios.get('/api/artists')
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
          <div className="song-cell2">{song.song_title} {song.ft_artist ? 'ft. ' + findArtist(song.ft_artist).artist_name : null}</div>
          <div className="song-cell3">Lyrics: {findArtist(song.lyrics).artist_name} Composer: {findArtist(song.composer).artist_name} Arrangement: {findArtist(song.arrangement).artist_name}</div>
        </div>
      )
    }
    )
  )
}

export default ArtistAlbumSongs