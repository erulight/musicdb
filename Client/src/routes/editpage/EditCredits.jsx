import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import { useParams } from 'react-router-dom'
import NewMember from './EditArtistAddNewMember'
import EditArtistExistingMemberList from './EditArtistExistingMemberList'
import NewTrack from './NewTrack'
import NewCredit from './NewCredit'
import EditSongExistingCreditList from './EditSongExistingCreditList'

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

  /*
      members_array.map((member, i) => {
      return(
        <div key={i}>
          <label className='input-label'>Name:</label>
          <input name={`membername-${i}`} onChange={props.handleChange} value={props.formValues[`membername-${i}`]} autoComplete='off'></input>
          <label className='input-label'>Position:</label>
          <input name={`memberpos-${i}`} onChange={props.handleChange} value={props.formValues[`memberpos-${i}`]} autoComplete='off'></input>
        </div>
      )
    })
    */

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