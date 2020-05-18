import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditExistingCredit from './EditExistingCredit'

/**
 * Renders a List of Existing Credits on the Edit Song Credits Page
 * @param {Object} props properties passed to component
 * - song_id {Number} id of song
 */
const EditSongExistingCreditList = (props) => {

  const song_id = props.song_id

  const [credits, setCredits] = useState([])
  useEffect(() => {
    axios.get('/api/edit/songs_credits/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setCredits(res.data)
      })
  }, [song_id]
  )

  return (
    credits.map((credit) => {
      return (
        <div className='existing-info' key={credit.id}>
          {credit.name} ({credit.type})
          <EditExistingCredit credit={credit}/>
        </div>
      )
    })
  )
}

export default EditSongExistingCreditList