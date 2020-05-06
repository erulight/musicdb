import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListMemberEdits = (props) => {

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
        <div key={edit_member.id}>
          <Link to={`/admin/edit/member/${edit_member.id}`}>{edit_member.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListMemberEdits