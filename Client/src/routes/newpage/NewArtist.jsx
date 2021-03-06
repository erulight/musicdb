import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/**
 * Renders the New Artist Page
 */
const NewArtist = () => {

  const [formValues, setFormValues] = useState({
    is_group: 'false',
    name: 'Name',
    real_name: 'Real Name',
    birthdate: new Date,
    active_status: 'true'
  })

  const [isSubmitted, setIsSubmitted] = useState({
    submitted: false
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const name = formValues.name
      const real_name = formValues.real_name
      const birthdate = formValues.birthdate
      const is_group = formValues.is_group === 'true'
      const active_status = formValues.active_status === 'true'

      setIsSubmitted({ submitted: true })

      const params = {
        name: name,
        real_name: real_name,
        birthdate: birthdate,
        is_group: is_group,
        active_status: active_status
      }
      axios.post('/api/new/new_artists', params)
        .then(response => console.log(response))
        .catch(function (error) {
          console.log(error);
        })
      console.log(name + real_name + birthdate + is_group + active_status)
    }
  )

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


  const isDisabled = formValues.is_group === 'true'
  return (
    <div className='page-container'>
      <form>
        <p className='back'><Link to={`/new`}>Back</Link></p>
        <div className='title-container'>
          <h1 className='title-text'>New Artist</h1>
        </div>
        <div className='list-container'>
          <div className='input-container'>
            <input type='radio' name='is_group' onChange={handleChange} value='true' />
            <label className='input-label'>Group</label>
            <input type='radio' name='is_group' onChange={handleChange} value='false' defaultChecked />
            <label className='input-label'>Solo</label>
          </div>
          <div className='input-container'>
            <select
              name='active_status'
              onChange={handleChange}
              value={formValues.active_status}>
              <option value='true'>Active</option>
              <option value='false'>Inactive</option>
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
                <input type='date' name='birthdate' value={formValues.birthdate} onChange={handleChange} disabled={isDisabled} />
              </span>
              : null
            }
          </div>
          <div className='input-container'>
            {isSubmitted.submitted ? <span>Submitted.</span> : <button className='button' type='button' onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewArtist