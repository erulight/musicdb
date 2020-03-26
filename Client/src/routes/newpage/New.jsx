import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const New = () => {


  return(
    <div>
      <h1>New</h1>
      <p><Link to={`/new/artist`}>Add New Artist</Link></p>
      <p><Link to={`/new/album`}>Add New Album (NYI)</Link></p>
      <p><Link to={`/new/song`}>Add New Song (NYI)</Link></p>
    </div>
  )
}


export default New