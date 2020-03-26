import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewArtist = (props) => {

  const [new_artists, set_new_artists] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_artists')
      .then((res) => {
        console.log(res)
        set_new_artists(res.data)
        console.log(new_artist)
      })
  }, []
  )

  const [artists, set_artists] = useState([])
  useEffect(() => {
    axios.get('/api/admin/artists')
      .then((res) => {
        console.log(res)
        set_artists(res.data)
      })
  }, []
  )

  const [new_artist, set_new_artist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_artists/:new_artist_id', { params: { new_artist_id: new_artists } })
      .then((res) => {
        console.log(res)
        set_new_artist(res.data[0])
      })
  }, []
  )

  return (
    new_artists.map((new_artist) => {
      return (
        <div key={new_artist.id}>
          <Link to={`/admin/new_artist/${new_artist.id}`}>{new_artist.id} {new_artist.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewArtist