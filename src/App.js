import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./component/NavBar";
import Player from "./component/Player";

function App() {
  return (
      <>
          <div className="App">
              <BrowserRouter>
                  <NavBar />
                  <Player />
                  <Routes>
                  </Routes>
                  {/*<Footer cookies={cookies} />*/}
              </BrowserRouter>
          </div>
      </>
  );
}

export default App;
