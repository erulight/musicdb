import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const AdminListNewCredits = (props) => {

  const [new_credits, set_new_credits] = useState([])
  useEffect(() => {
    axios.get('/api/admin/new_songs_credits')
      .then((res) => {
        console.log(res)
        set_new_credits(res.data)
      })
  }, []
  )

  return (
    new_credits.map((new_credit) => {
      return (
        <div key={new_credit.id}>
          <Link to={`/admin/new_credit/${new_credit.id}`}>{new_credit.name}</Link>
        </div>
      )
    })
  )
}

export default AdminListNewCredits