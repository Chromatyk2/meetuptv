import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const NavBar = React.lazy(() => import('./component/NavBar'));
const PlayerComponent = React.lazy(() => import('./component/Player'));
const NavComponent = React.lazy(() => import('./component/Nav'));
const Footer = React.lazy(() => import('./component/footer'));

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
