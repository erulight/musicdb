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
import AdminListNewTracks from './AdminListNewTracks'
import AdminListNewCredits from './AdminListNewCredits'
import AdminListCreditEdits from './AdminListCreditEdits'
import AdminListTrackEdits from './AdminListTrackEdits'

const Admin = (props) => {


  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>Admin</h1>
      </div>
      <div className='title-container'>
        <h1 className='title-text'>New</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>New Artists Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewArtist />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>New Albums Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewAlbum />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>New Songs Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewSong />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Edit Artist</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Artist Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListArtistEdits />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Artist New Members Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewMembers />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Artist Member Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListMemberEdits />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Edit Album</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Album Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListAlbumEdits />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Album New Tracks Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewTracks />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Album Track Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListTrackEdits />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Edit Song</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Song Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListSongEdits />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Song New Credits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListNewCredits />
      </div>
      <div className='header-container'>
        <h2 className='header-text'>Song Credit Edits Pending</h2>
      </div>
      <div className='list-container'>
        <AdminListCreditEdits />
      </div>
    </div>
  )
}

export default Admin