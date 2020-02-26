import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Artist from './Artist';
import Album from './Album';
import Song from './Song';

function App() {
  return (
    <Router>
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
