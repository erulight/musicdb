import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import IndexArtists from './IndexArtists'
import IndexAlbums from './IndexAlbums'
import IndexSongs from './IndexSongs'

const IndexPage = () => {

  return (
    <div>
      <div className='welcome-message'>
        Music DataBase
    </div>
      <div>
        <h1>Artists</h1>
        <IndexArtists></IndexArtists>
      </div>
      <div>
        <h1>Albums</h1>
        <IndexAlbums></IndexAlbums>
      </div>
      <div>
        <h1>Songs</h1>
        <IndexSongs></IndexSongs>
      </div>
    </div>
  )
}

export default IndexPage