import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const New = (props) => {
  
  const [new_artists_length, set_new_artists_length] = useState([])
  useEffect(() => {
    axios.get('/api/new/new_artists')
      .then((res) => {
        console.log(res)
        set_new_artists_length(res.data)
      })
  }, []
  )

  const [formValues, setFormValues] = useState({
    is_group: false,
    name: 'Name',
    real_name: 'Real Name',
    birthdate: new Date
    
  })

  const handleSubmit = React.useCallback(
    (event) => {
      const id = new_artists_length + 1
      const name = formValues.name
      const real_name = formValues.real_name
      const birthdate = formValues.birthdate
      const is_group = formValues.is_group

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
      const { name, value, checked, type } = event.target

      setFormValues({
        ...formValues,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  )


  return (
    <form>
      <h1>New Artist</h1>
      <div>
        <input type='checkbox' name='is_group' checked={formValues.approved} onChange={handleChange} />
        <label>This Artist is a Group</label>
      </div>
      <div>
        <label>Name</label>
        <input name='name' value={formValues.name} onChange={handleChange} />
      </div>
      <div>
        <label>Real Name</label>
        <input name='real_name' value={formValues.real_name} onChange={handleChange} disabled={formValues.is_group} />
      </div>
      <div>
        <label>Birthday</label>
        <input type='date' name='birthdate' value={formValues.birthdate} onChange={handleChange} disabled={formValues.is_group} />
      </div>
      <div>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}

export default New