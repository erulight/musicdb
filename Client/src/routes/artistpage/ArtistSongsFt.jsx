import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'

const ArtistSongsFt = (props) => {
  const artist_id = props.artist_id
  const [songs_c, setSongs_c] = useState([])
  useEffect(() => {
    axios.get('/api/artist/songs_credits/artist/:artist_id/:type',
      {
        params: {
          artist_id: artist_id,
          type: 'featured'
        }
      })
      .then((res) => {
        console.log(res)
        setSongs_c(res.data)
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

  const [songs, setSongs] = useState([])
  useEffect(() => {
    axios.get('/api/artist/songs')
      .then((res) => {
        console.log(res)
        setSongs(res.data)
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

  const findSong = (song_id) => {
    const song = songs.find((song) => { return song.id === song_id })
    return song || {}
  }
  if (!songs.length) return null

  return (
    songs_c.map((song_c) => {
      return (
        <div key={song_c.id} className="song-container-row">
          <div className="song-cell2">
            <span>
              <Link to={`/song/${song_c.id}`}>{song_c.title} </Link>
              By: <Link to={`/artist/${findArtist(findSong(song_c.song_id).artist_id).id}`}>{findArtist(findSong(song_c.song_id).artist_id).name} </Link>
              Release Date: {prettyDate(findSong(song_c.song_id).release_date)}
            </span>
          </div>
        </div>
      )
    }
    )
  )
}

export default ArtistSongsFt