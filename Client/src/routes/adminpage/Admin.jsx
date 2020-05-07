import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import AdminListNewArtist from './AdminListNewArtists'
import { Link } from 'react-router-dom'
import AdminListArtistEdits from './AdminListArtistEdits'
import AdminListNewAlbum from './AdminListNewAlbum'
import AdminListNewSong from './AdminListNewSong'
import AdminListNewMembers from './AdminListNewMembers'
import AdminListMemberEdits from './AdminListMembersEdits'
import AdminListAlbumEdits from './AdminListAlbumEdits'
import AdminListSongEdits from './AdminListSongEdits'

const Admin = (props) => {


  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <h2>New Artists Pending</h2>
      <div className=''>
        <AdminListNewArtist />
      </div>
      <h2>New Albums Pending</h2>
      <AdminListNewAlbum />
      <h2>New Songs Pending</h2>
      <AdminListNewSong />
      <h2>Artist Edits Pending</h2>
      <AdminListArtistEdits />
      <h2>Artist New Members Pending</h2>
      <AdminListNewMembers />
      <h2>Artist Member Edits Pending</h2>
      <AdminListMemberEdits />
      <h2>Album Edits Pending</h2>
      <AdminListAlbumEdits />
      <h2>Album New Tracks Pending</h2>
      <h2>Album Track Edits Pending</h2>
      <h2>Song Edits Pending</h2>
      <AdminListSongEdits />
      <h2>Song New Credits Pending</h2>
      <h2>Song Credit Edits Pending</h2>
    </div>
  )
}

export default Admin