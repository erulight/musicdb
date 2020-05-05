import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import AdminListNewArtist from './AdminListNewArtists'
import { Link } from 'react-router-dom'
import AdminListArtistEdits from './AdminListArtistEdits'

const Admin = (props) => {


  return (
    <div>
      <h1>
        Admin
      </h1>
      <h2>New Artists Pending</h2>
      <AdminListNewArtist></AdminListNewArtist>
      <h2>New Albums Pending</h2>
      <h2>New Songs Pending</h2>
      <h2>Artist Edits Pending</h2>
      <AdminListArtistEdits></AdminListArtistEdits>
    </div>
  )
}

export default Admin