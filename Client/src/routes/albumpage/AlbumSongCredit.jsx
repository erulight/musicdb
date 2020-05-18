import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

/**
 * Renders the Song Credit component of each song on the Album Page
 * @param {Object} props properties passed to component
 * - type {String} type of credit (featured, lyricist, composer, arranger)
 * - song_id {Number} id of song
 */
const AlbumSongCredit = (props) => {
  const song_id = props.song_id
  const type = props.type
  const [songs_c, setSongs_c] = useState([])
  useEffect(() => {
    axios.get('/api/album/songs_credits/:song_id/:type',
      {
        params: {
          song_id: song_id,
          type: type
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


  return (
    songs_c.map((song_c) => {
      return (
        <span>
          {type==='featured'
          ? <span> ft. </span>
          : null}
          <Link to={`/artist/${song_c.artist_id}`}> {findArtist(song_c.artist_id).name}</Link>
        </span>
      )
    })
  )
}

export default AlbumSongCredit