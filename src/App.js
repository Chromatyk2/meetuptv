import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./component/NavBar";
import Player from "./component/Player";
import Axios from "axios";
import logo from "./logo.svg";

function App() {
    const [stream, setStream] = useState(null);
    const [load, setLoad] = useState(true);
    const [streamers, setStreamers] = useState(["vaykhin", "lesdeliresdenunu", "d3sty_n0v4", "robinbill_", "bumblenoobee", "kaito_kuro_joker", "clem_brule", "sekkaroutv", "dypers", "asahrell", "apen___", "chromatyk", "colorehat", "Hebi_Scarlet", "zor3l", "honutv", "cyrioull", "muzangart"])

    const [streamerList, setStreamerList] = useState([]);
    useEffect(() => {
        Axios.post(
            'https://id.twitch.tv/oauth2/token',
            {
                client_id:'4srh1li6udcsg3j7ej1kyphbl33n7o',
                client_secret:'p09h2c299pn8ojiro3aezbh14bp7wv',
                grant_type:"client_credentials"
            }).then(function(response) {
                Axios.get(
                    'https://api.twitch.tv/helix/streams?user_login=meetup_tv',
                    {
                        headers: {
                            'Authorization': `Bearer ` + response.data.access_token,
                            'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                        }
                    }
                ).then(function (response) {
                    streamers.map((val, key) => {
                        Axios.get(
                            'https://api.twitch.tv/helix/users?login='+val,
                            {
                                headers: {
                                    'Authorization': `Bearer ` + response.data.access_token,
                                    'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                                }
                            }
                        ).then(function(response){
                            setStreamerList(streamerList => [...streamerList,response.data]);
                        })
                    })
                    setStream(response.data);
                    setLoad(false)
                })
            })
    }, [])
    console.log(streamerList)
  return (
      <>
          {load ?
              <div className="App-loader">
                  <img src={logo} className="App-logo-loader" alt="logo"/>
              </div>
              :
              <div className="App">
                  <BrowserRouter>
                      <NavBar/>
                      <Routes>
                          <Route path="/stream" element={<Player stream={stream}/>}/>
                      </Routes>
                      {/*<Footer cookies={cookies} />*/}
                  </BrowserRouter>
              </div>
          }
      </>
  );
}

export default App;
