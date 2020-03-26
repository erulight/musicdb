import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/scss/banner.scss'

const Banner = () => {

  return(
    <header className='site-banner'>
      <div className='site-title'><Link to={`/`}>Music DataBase</Link></div>
      <div className='new-button'><Link to={`/new`}>New</Link></div>
      <div className='admin-button'><Link to={`/admin`}>Admin</Link></div>
    </header>
  )
}

export default Banner