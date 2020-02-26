import React, { useState, useEffect } from 'react'
import axios from 'axios'
import image2 from './assets/images/album_art.jpg'
import ArtistAlbumSongs from './ArtistAlbumSongs'
import { prettyYear } from './utils/dateutils'
import { Link } from 'react-router-dom'

const ArtistAlbum = (props) => {
  const artist_id = props.artist_id
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/artist/albums/:artist_id', { params: { artist_id: artist_id } })
      .then((res) => {
        console.log(res)
        setAlbums(res.data)
      })
  }, []
  )

  return (
    albums.map((album) => {
      return (
        <div key={album.id}>
          <div className="artist-album-container">
            <div>
              <img className="placeholder-album-art" src={image2}></img>
            </div>
            <div className="album-info-container">
              <div className="album-info">
                <h3><Link to={`/album/${album.id}`}>{album.album_title}</Link> ({prettyYear(album.release_date)})</h3>
              </div>
              <div className="song-container">
                <div className="song-container-headers-container">
                  <div className="song-container-headers">#</div>
                  <div className="song-container-headers">Title</div>
                  <div className="song-container-headers">Credits</div>
                </div>
                <ArtistAlbumSongs album_id={album.id}></ArtistAlbumSongs>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ArtistAlbum



