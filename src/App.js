import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const HeaderComponent = React.lazy(() => import('./component/Header'));
const PlayerComponent = React.lazy(() => import('./component/Player'));
const NavComponent = React.lazy(() => import('./component/Nav'));

function App() {
  return (
      <>
          <NavComponent />
          <div className="App">
              <Suspense fallback={
                  <div className="App-loader">
                      <img src={logo} className="App-logo-loader" alt="logo"/>
                  </div>
              }>
                  <HeaderComponent />
                  <PlayerComponent />
              </Suspense>
          </div>
      </>
  );
}

export default App;
