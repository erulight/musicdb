import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Index
import IndexPage from './routes/index/IndexPage';
//Banner
import Banner from'./routes/banner/Banner';
//Main Pages
import Artist from './routes/artistpage/Artist';
import Album from './routes/albumpage/Album';
import Song from './routes/songpage/Song';
//New Pages
import New from './routes/newpage/New';
import NewArtist from './routes/newpage/NewArtist';
import NewAlbum from './routes/newpage/NewAlbum';
import NewSong from './routes/newpage/NewSong';
//Admin Pages
import Admin from './routes/adminpage/Admin';
import AdminNewArtist from './routes/adminpage/AdminNewArtist';
import AdminEditArtist from './routes/adminpage/AdminEditArtist';
import AdminNewAlbum from './routes/adminpage/AdminNewAlbum';
import AdminNewSong from './routes/adminpage/AdminNewSong';
import AdminNewMember from './routes/adminpage/AdminNewMember';
import AdminEditMember from './routes/adminpage/AdminEditMember';
import AdminEditAlbum from './routes/adminpage/AdminEditAlbum';
import AdminEditSong from './routes/adminpage/AdminEditSong';
import AdminNewTrack from './routes/adminpage/AdminNewTrack';
import AdminNewCredit from './routes/adminpage/AdminNewCredit';
//Edit Pages
import EditArtist from './routes/editpage/EditArtist';
import EditMembers from './routes/editpage/EditMembers';
import EditAlbum from './routes/editpage/EditAlbum';
import EditTracks from './routes/editpage/EditTracks';
import EditSong from './routes/editpage/EditSong';
import EditCredits from './routes/editpage/EditCredits';
//CSS
import './assets/scss/index.scss';

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
      <Route exact path="/new/album">
        <NewAlbum />
      </Route>
      <Route exact path="/new/song">
        <NewSong />
      </Route>
      <Route exact path="/edit/artist/:id">
        <EditArtist />
      </Route>
      <Route exact path="/edit/members/:id">
        <EditMembers />
      </Route>
      <Route exact path="/edit/album/:id">
        <EditAlbum />
      </Route>
      <Route exact path="/edit/tracks/:id">
        <EditTracks />
      </Route>
      <Route exact path="/edit/song/:id">
        <EditSong />
      </Route>
      <Route exact path="/edit/credits/:id">
        <EditCredits />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/admin/new_artist/:id">
        <AdminNewArtist />
      </Route>
      <Route exact path="/admin/new_album/:id">
        <AdminNewAlbum />
      </Route>
      <Route exact path="/admin/new_song/:id">
        <AdminNewSong />
      </Route>
      <Route exact path="/admin/new_member/:id">
        <AdminNewMember />
      </Route>
      <Route exact path="/admin/new_track/:id">
        <AdminNewTrack />
      </Route>
      <Route exact path="/admin/new_credit/:id">
        <AdminNewCredit />
      </Route>
      <Route exact path="/admin/edit/artist/:id">
        <AdminEditArtist />
      </Route>
      <Route exact path="/admin/edit/member/:id">
        <AdminEditMember />
      </Route>
      <Route exact path="/admin/edit/album/:id">
        <AdminEditAlbum />
      </Route>
      <Route exact path="/admin/edit/song/:id">
        <AdminEditSong />
      </Route>
    </Router>
  );
}

export default App;
