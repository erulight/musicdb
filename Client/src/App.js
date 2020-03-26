import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Artist from './routes/artistpage/Artist';
import Album from './routes/albumpage/Album';
import Song from './routes/songpage/Song';
import New from './routes/newpage/New';
import NewArtist from './routes/newpage/NewArtist';
import Admin from './routes/adminpage/Admin';
import Banner from'./routes/Banner';
import AdminNewArtist from './routes/adminpage/AdminNewArtist';

function App() {
  return (
    <Router>
      <Banner />
      <Route exact path="/">
        <div class='welcome-message'>
          This will be a real homepage someday, but please <Link to={'/artist/1'}>Click Here</Link>
        </div>
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
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/admin/new_artist/:id">
        <AdminNewArtist />
      </Route>
    </Router>
  );
}

export default App;
