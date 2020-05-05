import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const IndexPage = () => {
  return (
    <div className='welcome-message'>
      This will be a real homepage someday, but please <Link to={'/artist/1'}>Click Here</Link>
    </div>
  )
}

export default IndexPage