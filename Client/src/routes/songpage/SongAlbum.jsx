import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

/**
 * Renders the List of Albums a particular song appears on, on the Song Page
 * @param {Object} props properties passed to component
 * - song_id {Number} id of song
 */
const SongAlbum = (props) => {
  const song_id = props.song_id

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/song/albums')
      .then((res) => {
        console.log(res)
        setAlbums(res.data)
      })
  }, []
  )

  const [albums_s, setAlbums_s] = useState([])
  useEffect(() => {
    axios.get('/api/song/songs_albums/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setAlbums_s(res.data)
      })
  }, []
  )

  const findAlbum = (album_id) => {
    //console.log(album_id)
    const album = albums.find((album) => { return album.id === album_id })
    return album || {}
  }
  if (!albums.length) return null

  return (
    albums_s.map((album_s) => {
      return (
        <span>
          <p>
            <Link to={`/album/${album_s.album_id}`}>{findAlbum(album_s.album_id).title}</Link>
          </p>
        </span>
      )
    })
  )
}

export default SongAlbum