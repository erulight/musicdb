import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ArtistAlbumSongCredit from './ArtistAlbumSongCredit'

const ArtistAlbumSongs = (props) => {
  const album_id = props.album_id
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    axios.get('/api/artist/tracks/:album_id', { params: { album_id: album_id } })
      .then((res) => {
        console.log(res)
        setTracks(res.data)
      })
  }, []
  )

  return (
    tracks.map((track) => {
      return (
        <div key={track.id} className="song-container-row">
          <div className="song-cell1">{track.number}</div>
          <div className="song-cell2">
            <span><Link to={`/song/${track.song_id}`}>{track.title}</Link></span>
            {<ArtistAlbumSongCredit song_id={track.song_id} type={'featured'}></ArtistAlbumSongCredit>}
          </div>
          <div className="song-cell3">
            <span> Lyrics: {<ArtistAlbumSongCredit song_id={track.song_id} type={'lyricist'}></ArtistAlbumSongCredit>} </span>
            <span> Composer: {<ArtistAlbumSongCredit song_id={track.song_id} type={'composer'}></ArtistAlbumSongCredit>} </span>
            <span> Arrangement: {<ArtistAlbumSongCredit song_id={track.song_id} type={'arranger'}></ArtistAlbumSongCredit>} </span>
          </div>
        </div>
      )
    }
    )
  )
}

export default ArtistAlbumSongs