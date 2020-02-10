import React, { useState } from 'react'
import image from './oneokrock.png'
const members = ['jim', 'bob', 'george']

const ArtistProfile = () => {
  const RenderArtistProfile = (props) => {
    return (
      <div>
        <div> {/* Artist Info Div */}
          <div>
            <img src={image}></img>
          </div>
          <div>
            <ul>{members.map((member) => {
              return (
                <li>{member}</li>
              )
            })}</ul>
          </div>
          <div>
            Artist Information
        </div>
        </div>
        <div> {/* Artist Works */}
          <div>
            <div>

            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <RenderArtistProfile></RenderArtistProfile>
  )
}

export default ArtistProfile