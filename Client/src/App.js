import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Artist from './Artist';
import Album from './Album';
import Song from './Song';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div>
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
    </Router>
  );
}

export default App;
