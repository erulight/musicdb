import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'
import { useParams } from 'react-router-dom'
import NewMember from './EditArtistAddNewMember'
import EditArtistExistingMemberList from './EditArtistExistingMemberList'

const EditTracks = () => {

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
          <label>Name:</label>
          <input name={`membername-${i}`} onChange={props.handleChange} value={props.formValues[`membername-${i}`]} autoComplete='off'></input>
          <label>Position:</label>
          <input name={`memberpos-${i}`} onChange={props.handleChange} value={props.formValues[`memberpos-${i}`]} autoComplete='off'></input>
        </div>
      )
    })
    */

  return (
    <div>
      <h1>Edit Members</h1>
      <h2>{artist.name}</h2>
      <h1>Existing Members</h1>
      <EditArtistExistingMemberList artist_id={artist_id}></EditArtistExistingMemberList>
      <h1>New Members</h1>
      <NewMember artist_id={artist_id}></NewMember>
    </div>
  )
}

export default EditTracks