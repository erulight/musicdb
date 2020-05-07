import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchDropMenu = (props) => {
  const search = props.search
  const type = props.type

  const [results, setResults] = useState([])
  const [searchable, setSearchable] = useState(true)
  useEffect(() => {
    if (!searchable) return
    setSearchable(false)
    if (type === 'artist') {
      axios.get('/api/banner/artists/:search',
        { params: { search: search } })
        .then((res) => {
          console.log(res)
          setResults(res.data)
        })
    }
    if (type === 'album') {
      axios.get('/api/banner/albums/:search',
        { params: { search: search } })
        .then((res) => {
          console.log(res)
          setResults(res.data)
        })
    }
    if (type === 'song') {
      axios.get('/api/banner/songs/:search',
        { params: { search: search } })
        .then((res) => {
          console.log(res)
          setResults(res.data)
        })
    }
    setTimeout(() => {
      setSearchable(true)
    }, 300
    )
  }, [search, type]
  )

  console.log(results)
  const containerClassNames = 'search-results-container'.concat(
    results.length > 0 ? '' : ' search-results-container-hidden'
  )

  return (
    <div className={containerClassNames}>
      {results.map((result) => (
        <div className='search-results-container-item'>
            <Link to={`/${type}/${result.id}`}>{result.name || result.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default SearchDropMenu