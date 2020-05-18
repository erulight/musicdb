import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NewCredit from './NewCredit'
import EditSongExistingCreditList from './EditSongExistingCreditList'

/**
 * Renders the Edit Credits page
 */
const EditCredits = () => {

  const params = useParams()
  console.log(params)
  const song_id = params.id;

  //const members_array = new Array().fill(undefined)

  const [song, setSong] = useState({})
  useEffect(() => {
    axios.get('/api/edit/songs/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setSong(res.data[0])
      })
  }, [song_id]
  )
  const [songs_credits, setSongsCredits] = useState([])
  useEffect(() => {
    axios.get('/api/edit/songs_credits/:song_id', { params: { song_id: song_id } })
      .then((res) => {
        console.log(res)
        setSongsCredits(res.data)
      })
  }, [song_id]
  )

  return (
    <div className='page-container'>
      <div className='title-container'>
        <h1 className='title-text'>Edit Credits</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>{song.title}</h2>
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Existing Credits</h1>
      </div>
      <div className='list-container'>
        <EditSongExistingCreditList song_id={song_id} />
      </div>
      <div className='title-container'>
        <h1 className='title-text'>New Credit</h1>
      </div>
      <div className='list-container'>
        <NewCredit song_id={song_id} />
      </div>
    </div>
  )
}

export default EditCredits