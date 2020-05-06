import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewMembers = (props) => {

  const [new_members, set_new_members] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_members')
      .then((res) => {
        console.log(res)
        set_new_members(res.data)
      })
  }, []
  )

  return (
    new_members.map((new_member) => {
      return (
        <div key={new_member.id}>
          <Link to={`/admin/new_member/${new_member.id}`}>{new_member.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewMembers