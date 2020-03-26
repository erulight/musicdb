import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ArtistMembers = (props) => {
  const artist_id = props.artist_id
  const [members, setMembers] = useState([])
  useEffect(() => {
    axios.get('/api/artist/members/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setMembers(res.data)
      })
  }, [artist_id]
  )

  return (
    members.map((member) => {
      return(
        <div>
          <p>
            <span>
              {member.artist_id
              ? <span><Link to={`/artist/${member.artist_id}`}>{member.name}</Link></span>
              : <span>{member.name}</span>}
              {member.position
              ? <span> ({member.position})</span>
              : null}
              </span>
              </p>
        </div>
      )
    }
    )
  )
}

export default ArtistMembers