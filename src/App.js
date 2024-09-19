import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./component/Player";

const HeaderComponent = React.lazy(() => import('./component/Header'));
const NavBar = React.lazy(() => import('./component/NavBar'));
const NavComponent = React.lazy(() => import('./component/Nav'));
const Footer = React.lazy(() => import('./component/footer'));

function App() {
  return (
      <>
          <div className="App">
              <Suspense fallback={
                  <div>
                      <img src={logo} className="App-logo-loader" alt="logo"/>
                  </div>
              }>
                  <NavBar />
                  <HeaderComponent />
                  <Player />
                  <NavComponent />
                  <Footer />
              </Suspense>
          </div>
      </>
  );
}

export default App;
