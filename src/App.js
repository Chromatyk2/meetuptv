import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";

const HeaderComponent = React.lazy(() => import('./component/Header'));
const PlayerComponent = React.lazy(() => import('./component/Player'));
const NavComponent = React.lazy(() => import('./component/Nav'));

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
                  <HeaderComponent />
                  <PlayerComponent />
                  <NavComponent />
              </Suspense>
          </div>
      </>
  );
}

export default App;
