import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Member Edits pending in the Admin App
 */
const AdminListMemberEdits = () => {

  const [edit_members, set_edit_members] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_members')
      .then((res) => {
        console.log(res)
        set_edit_members(res.data)
      })
  }, []
  )

  return (
    edit_members.map((edit_member) => {
      return (
        <div className='index-list-item' key={edit_member.id}>
          <Link to={`/admin/edit/member/${edit_member.id}`}>{edit_member.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListMemberEdits