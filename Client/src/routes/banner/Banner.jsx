import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchDropMenu from './SearchDropMenu'

/**
 * Renders the Site Banner
 */
const Banner = () => {

  const [formValues, setFormValues] = useState({
    search: '',
    type: 'artist'
  })

  const handleChange = React.useCallback(
    (event) => {
      const { name, value } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
    }, [formValues]
  )
  console.log(formValues)

  return (
    <header className='site-banner'>
      <div className='site-title'><Link to={`/`}>Music DataBase</Link></div>
      <div className='search-stuff'>
        <div className='search-drop-down'>
          <select
            name='type'
            onChange={handleChange}
            value={formValues.type}
          >
            <option value='artist'>Artist</option>
            <option value='album'>Album</option>
            <option value='song'>Song</option>
          </select>
        </div>
        <div className='search-bar'>
          <input name='search' value={formValues.search} onChange={handleChange} autoComplete='off' />
          <SearchDropMenu search={formValues.search} type={formValues.type} />
        </div>
      </div>
      <div className='new-button'><Link to={`/new`}>New</Link></div>
      <div className='admin-button'><Link to={`/admin`}>Admin</Link></div>
    </header>
  )
}

export default Banner