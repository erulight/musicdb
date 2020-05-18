import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all New Members pending in the Admin App
 */
const AdminListNewMembers = () => {

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
        <div className='index-list-item' key={new_member.id}>
          <Link to={`/admin/new_member/${new_member.id}`}>{new_member.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewMembers