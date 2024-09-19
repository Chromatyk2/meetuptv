import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
          <div className="App">
              <Suspense fallback={
                  <div className="App-loader">
                      <img src={logo} className="App-logo-loader" alt="logo"/>
                  </div>
              }>
                  <NavBar />
                  <PlayerComponent />
              </Suspense>
          </div>
      </>
  );
}

export default App;
