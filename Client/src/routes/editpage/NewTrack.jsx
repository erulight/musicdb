import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes, { array } from 'prop-types'

const NewTrack = (props) => {

  const members_array = new Array(props.amount_members).fill(undefined)

  return (
    members_array.map((member, i) => {
      return(
        <div key={i}>
          <label>Name:</label>
          <input name={`membername-${i}`} onChange={props.handleChange} value={props.formValues[`membername-${i}`]} autoComplete='off'></input>
          <label>Position:</label>
          <input name={`memberpos-${i}`} onChange={props.handleChange} value={props.formValues[`memberpos-${i}`]} autoComplete='off'></input>
        </div>
      )
    })

  )
}

export default NewTrack