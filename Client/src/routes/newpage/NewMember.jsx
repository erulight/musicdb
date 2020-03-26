import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'

const NewMember = (props) => {

  const members_array = new Array(props.amount_members).fill(undefined)

  return (
    members_array.map((member, i) => {
      return(
        <div key={i}>
          <label>Name:</label>
          <input name={`membername-${i}`} onChange={props.handleChange} value={props.formValues[`membername-${i}`]}></input>
          <label>Position:</label>
          <input name={`memberpos-${i}`} onChange={props.handleChange} value={props.formValues[`memberpos-${i}`]}></input>
        </div>
      )
    })

  )
}

export default NewMember