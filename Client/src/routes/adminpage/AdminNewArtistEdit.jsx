import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { prettyDate, inputDate } from '../../utils/dateutils'


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
    birthdate: props.birthdate,
    active_status: props.active_status
  })

  React.useEffect(() => {
    setFormValues({
      is_group: props.is_group,
      name: props.name,
      real_name: props.real_name,
      birthdate: props.birthdate,
      active_status: props.active_status
    })
  }, [props.is_group, props.name, props.real_name, props.birthdate, props.active_status])

  //const [amount_members, setAmountMembers] = useState(0)

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
    }
  )
  console.log(formValues)

  /*
  const handleChangeMembers = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setAmountMembers(parseInt(value) || 1)
    }
  )
  */

  const isDisabled = formValues.is_group === 'true'
  return (
    <div>
      <h2>Editing...</h2>
      <div className='input-container'>
        <input type='radio' name='is_group' onChange={handleChange} value='true' checked={isDisabled} />
        <label className='input-label'>Group</label>
        <input type='radio' name='is_group' onChange={handleChange} value='false' checked={!isDisabled} />
        <label className='input-label'>Solo</label>
      </div>
      <div className='input-container'>
        <select
          name='active_status'
          onChange={handleChange}
          value={formValues.active_status}>
          <option value='true'>Active</option>
          <option vakue='false'>Inactive</option>
        </select>
      </div>
      <div className='input-container'>
        <label className='input-label'>Name</label>
        <input name='name' value={formValues.name} onChange={handleChange} />
      </div>
      <div className='input-container'>
        {!isDisabled
          ? <span>
            <label className='input-label'>Real Name</label>
            <input name='real_name' value={formValues.real_name} onChange={handleChange} />
          </span>
          : null
        }
      </div>
      <div className='input-container'>
        {!isDisabled
          ? <span>
            <label className='input-label'>Birthday</label>
            <input type='date' name='birthdate' value={inputDate(formValues.birthdate)} onChange={handleChange} disabled={isDisabled} />
          </span>
          : null
        }
      </div>
    </div>
  )
}

export default AdminNewArtistEdit