import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ArtistSongsArranger = (props) => {
  const artist_id = props.artist_id
  const [songs, setSongs] = useState([])
  // useEffect(() => {
  //   axios.get('/api/artist/songs.ft_artist_id/:artist_id', { params: { artist_id: artist_id } })
  //     .then((res) => {
  //       console.log(res)
  //       setSongs(res.data)
  //     })
  // }, []
  // )
  // useEffect(() => {
  //   axios.get('/api/artist/songs.lyrics_id/:artist_id', { params: { artist_id: artist_id } })
  //     .then((res) => {
  //       console.log(res)
  //       setSongs(res.data)
  //     })
  // }, []
  // )
  // useEffect(() => {
  //   axios.get('/api/artist/songs.composer_id/:artist_id', { params: { artist_id: artist_id } })
  //     .then((res) => {
  //       console.log(res)
  //       setSongs(res.data)
  //     })
  // }, []
  // )
  useEffect(() => {
    axios.get('/api/artist/songs.arrangement_id/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setSongs(res.data)
      })
  }, []
  )

  /*
  const findSong = (artist_id) => {
    //console.log(artist_id)
    const artist = artists.find((artist) => { return artist.id === artist_id })
    return artist || {}
  }
  console.log(artists)
  if (!artists.length) return null
  */

  return (
    songs.map((song) => {
      return (
        <div key={song.id} className="song-container-row">
          <div className="song-cell2">
            <span><Link to={`/song/${song.id}`}>{song.title}</Link></span>
          </div>
        </div>
      )
    }
    )
  )
}

export default ArtistSongsArranger