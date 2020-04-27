import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate } from '../../utils/dateutils'


const AdminNewArtistEdit = (props) => {
  const params = useParams()
  console.log(params)
  const new_artist_id = params.id;

  const [new_artist, set_new_artist] = useState({})
  useEffect(() => {
    axios.get('/api/admin/new_artists/:new_artist_id', { params: { new_artist_id: new_artist_id } })
      .then((res) => {
        console.log(res)
        set_new_artist(res.data[0])
      })
  }, []
  )

  const [artists, set_artists] = useState([])
  useEffect(() => {
    axios.get('/api/admin/artists')
      .then((res) => {
        console.log(res)
        set_artists(res.data)
        console.log(artists.length)
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    is_group: props.is_group,
    name: props.name,
    real_name: props.real_name,
    birthdate: props.birthdate
  })

  const [amount_members, setAmountMembers] = useState(0)

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
    }
  )

  
  const handleChangeMembers = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setAmountMembers(parseInt(value) || 1)
    }
  )

  const isDisabled = new_artist.is_group === true
  return (
    <div>
      <h2>Editing...</h2>
      <div>
        <input type='radio' name='is_group' onChange={handleChange} value='true' checked={formValues.is_group}/>
        <label>Group</label>
        <input type='radio' name='is_group' onChange={handleChange} value='false' checked={!formValues.is_group}/>
        <label>Solo</label>
      </div>
      <div>
        <label>Name</label>
        <input name='name' value={formValues.name} onChange={handleChange} />
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Real Name</label>
            <input name='real_name' value={formValues.real_name} onChange={handleChange} />
          </span>
          : null
        }
      </div>
      <div>
        {!isDisabled
          ? <span>
            <label>Birthday</label>
            <input type='date' name='birthdate' value={formValues.birthdate} onChange={handleChange} disabled={isDisabled} />
          </span>
          : null
        }
      </div>
      {isDisabled ?

        <div>
          <h1>Members</h1>
          <div>
            <label>Amount of Members:</label>
            <input name='amount_members' value={amount_members} onChange={handleChangeMembers} type='number' max={25} min={0} step={1}></input>
          </div>
          Members
        </div>
        : null}
    </div>
  )
}

export default AdminNewArtistEdit