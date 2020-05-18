import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders a list of all Credit Edits pending in the Admin App
 */
const AdminListCreditEdits = () => {

  const [edit_credits, set_edit_credits] = useState([])
  useEffect(() => {
    axios.get('/api/admin/edit_credits')
      .then((res) => {
        console.log(res)
        set_edit_credits(res.data)
      })
  }, []
  )

  return (
    edit_credits.map((edit_credit) => {
      return (
        <div className='index-list-item' key={edit_credit.id}>
          <Link to={`/admin/edit/credit/${edit_credit.id}`}>{edit_credit.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListCreditEdits