import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * Renders the 'New' Page
 */
const New = () => {


  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>New</h1>
      </div>
      <div className='list-container'>
        <p className='index-list-item'><Link to={`/new/artist`}>Add New Artist</Link></p>
        <p className='index-list-item'><Link to={`/new/album`}>Add New Album</Link></p>
        <p className='index-list-item'><Link to={`/new/song`}>Add New Song</Link></p>
      </div>
    </div>
  )
}


export default New