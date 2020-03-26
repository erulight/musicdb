import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import NewMember from './NewMember'
import { Link } from 'react-router-dom'

const NewArtist = (props) => {

  const [new_artists, set_new_artists] = useState([])
  useEffect(() => {
    axios.get('/api/new/new_artists')
      .then((res) => {
        console.log(res)
        set_new_artists(res.data)
      })
  }, []
  )

  const [new_members, set_new_members] = useState([])
  useEffect(() => {
    axios.get('/api/new/new_members')
      .then((res) => {
        console.log(res)
        set_new_members(res.data)
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    is_group: 'false',
    name: 'Name',
    real_name: 'Real Name',
    birthdate: new Date
  })

  const [amount_members, setAmountMembers] = useState(0)

  const handleSubmit = React.useCallback(
    (event) => {
      const id = new_artists.length
      const name = formValues.name
      const real_name = formValues.real_name
      const birthdate = formValues.birthdate
      const is_group = formValues.is_group === 'true'

      const params = {
        id: id,
        name: name,
        real_name: real_name,
        birthdate: birthdate,
        is_group: is_group
      }
      axios.post('/api/new/new_artists', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(id + name + real_name + birthdate + is_group)
    }
  )

  const handleChange = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setFormValues({
        ...formValues,
        [name]: value
      })
      console.log(formValues)
    }
  )

  const handleChangeMembers = React.useCallback(
    (event) => {
      const { name, value, type } = event.target

      setAmountMembers(parseInt(value) || 1)
    }
  )

  const isDisabled = formValues.is_group === 'true'
  return (
    <form>
      <p><Link to={`/new`}>Back</Link></p>
      <h1>New Artist</h1>
      <div>
        <input type='radio' name='is_group' onChange={handleChange} value='true' />
        <label>Group</label>
        <input type='radio' name='is_group' onChange={handleChange} value='false' />
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
          <NewMember amount_members={amount_members} handleChange={handleChange} formValues={formValues}></NewMember>
          </div>
        : null}
      <div>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default NewArtist