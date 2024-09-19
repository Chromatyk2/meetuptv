import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import Player from "./component/Player";

function App() {
  return (
      <>
          <div className="App">
                  <NavBar />
                  <Player />
          </div>
      </>
  );
}

export default App;
