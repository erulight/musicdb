import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Banner from'./routes/Banner';
import Artist from './routes/artistpage/Artist';
import Album from './routes/albumpage/Album';
import Song from './routes/songpage/Song';
import New from './routes/newpage/New';
import NewArtist from './routes/newpage/NewArtist';
import NewAlbum from './routes/newpage/NewAlbum';
import NewSong from './routes/newpage/NewSong';
import Admin from './routes/adminpage/Admin';
import AdminNewArtist from './routes/adminpage/AdminNewArtist';
import EditArtist from './routes/editpage/EditArtist';
import './assets/scss/artist.scss';
import './assets/scss/album.scss';
import './assets/scss/song.scss';
import './assets/scss/banner.scss';
import IndexPage from './routes/IndexPage';
import AdminEditArtist from './routes/adminpage/AdminEditArtist';

function App() {
  return (
    <Router>
      <Banner />
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route exact path="/artist/:id">
        <Artist />
      </Route>
      <Route exact path="/album/:id">
        <Album />
      </Route>
      <Route exact path="/song/:id">
        <Song />
      </Route>
      <Route exact path="/new">
        <New />
      </Route>
      <Route exact path="/new/artist">
        <NewArtist />
      </Route>
      <Route exact path="/edit/artist/:id">
        <EditArtist />
      </Route>
      <Route exact path="/new/album">
        <NewAlbum />
      </Route>
      <Route exact path="/new/song">
        <NewSong />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/admin/new_artist/:id">
        <AdminNewArtist />
      </Route>
      <Route exact path="/admin/edit/artist/:id">
        <AdminEditArtist />
      </Route>
    </Router>
  );
}

export default App;
