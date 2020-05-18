import React, { useState, useEffect } from 'react'
import IndexArtists from './IndexArtists'
import IndexAlbums from './IndexAlbums'
import IndexSongs from './IndexSongs'

/**
 * Renders the Index Page
 */
const IndexPage = () => {

  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>Artists</h1>
      </div>
      <div className='list-container'>
        <IndexArtists />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Albums</h1>
      </div>
      <div className='list-container'>
        <IndexAlbums />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Songs</h1>
      </div>
      <div className='list-container'>
        <IndexSongs />
      </div>
    </div>
  )
}

export default IndexPage