import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DropDownArtist = (props) => {
  const search = props.search

  const [results, setResults] = useState([])
  const [searchable, setSearchable] = useState(true)
  useEffect(() => {
    if (!searchable) return
    setSearchable(false)
    axios.get('/api/new/albums/:search',
      { params: { search: search } })
      .then((res) => {
        console.log(res)
        setResults(res.data)
      })
    setTimeout(() => {
      setSearchable(true)
    }, 300
    )
  }, [search]
  )

  return (
    <div className='artist-results-container'>
      {results.map((result) => (
        <div onClick={()=>{props.handleClick(result)}} tabIndex='-1'>
          <span>
            {result.title}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DropDownArtist