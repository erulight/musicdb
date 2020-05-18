import React, { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Creates a drop down component on a Song Search field
 * @param {Object} props properties passed to component
 * - search {String} search value
 */
const DropDownArtist = (props) => {
  const search = props.search

  const [results, setResults] = useState([])
  const [searchable, setSearchable] = useState(true)
  useEffect(() => {
    if (!searchable) return
    setSearchable(false)
    axios.get('/api/new/songs/:search',
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