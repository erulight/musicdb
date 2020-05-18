import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditExistingMember from './EditExistingMember'

/**
 * Renders a list of existing members of a particular artist on the edit artist members page
 * @param {Object} props properties passed to component
 * - artist_id {Number} id of artist
 */
const EditArtistExistingMemberList = (props) => {

  const artist_id = props.artist_id

  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/edit/members/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, [artist_id]
  )


  return (
    members.map((member) => {
      return (
        <div className='existing-info' key={member.id}>
          {member.name} ({member.position})
          <EditExistingMember member={member}></EditExistingMember>
        </div>
      )
    })
  )
}

export default EditArtistExistingMemberList