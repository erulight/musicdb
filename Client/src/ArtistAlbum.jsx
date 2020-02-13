import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArtistAlbumSongs from './ArtistAlbumSongs'
import { prettyYear } from './utils/dateutils'

const ArtistAlbum = (props) => {
  const artist_id = props.artist_id
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    axios.get('/api/get/albums/:artist_id', { params: { artist_id: artist_id } })
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
              <p className="placeholder-album-art">Album Art</p>
            </div>
            <div className="album-info-container">
              <div className="album-info">
                <h3>{album.album_title} ({prettyYear(album.release_date)})</h3>
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



