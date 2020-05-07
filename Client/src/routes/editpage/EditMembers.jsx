import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import { useParams } from 'react-router-dom'
import NewMember from './EditArtistAddNewMember'
import EditArtistExistingMemberList from './EditArtistExistingMemberList'

const EditMembers = () => {

  const params = useParams()
  console.log(params)
  const artist_id = params.id;

  //const members_array = new Array().fill(undefined)

  const [artist, setArtist] = useState({})
  useEffect(() => {
    axios.get('/api/edit/artists/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setArtist(res.data[0])
      })
  }, [artist_id]
  )
  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/edit/members/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, [artist_id]
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
        <h1 className='title-text'>Edit Members</h1>
      </div>
      <div className='header-container'>
        <h2 className='header-text'>{artist.name}</h2>
      </div>
      <div className='title-container'>
        <h1 className='title-text'>Existing Members</h1>
      </div>
      <div className='list-container'>
        <EditArtistExistingMemberList artist_id={artist_id}></EditArtistExistingMemberList>
      </div>
      <div className='title-container'>
        <h1 className='title-text'>New Members</h1>
      </div>
      <div className='list-container'>
        <NewMember artist_id={artist_id}></NewMember>
      </div>
    </div>
  )
}

export default EditMembers