import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./component/NavBar";
import Player from "./component/Player";
import Team from "./component/Team";
import Planing from "./component/Planing";
import Footer from "./component/footer";
import Home from "./component/Home";
import Axios from "axios";
import logo from "./logo.svg";

function App() {
    const [stream, setStream] = useState(null);
    const [load, setLoad] = useState(true);
    const [streamers, setStreamers] = useState(["vaykhin", "lesdeliresdenunu", "d3sty_n0v4", "robinbill_", "bumblenoobee", "kaito_kuro_joker", "clem_brule", "SekkarouTV", "dypers", "asarhell", "apen___", "chromatyk", "colorehat", "Hebi_Scarlet", "zor3l", "honutv", "muzangart"])
    const [streamerList, setStreamerList] = useState([]);
    useEffect(() => {
        Axios.post(
            'https://id.twitch.tv/oauth2/token',
            {
                client_id:'4srh1li6udcsg3j7ej1kyphbl33n7o',
                client_secret:'p09h2c299pn8ojiro3aezbh14bp7wv',
                grant_type:"client_credentials"
            }).then(function(response) {
                const token = response.data.access_token;
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
                                    'Authorization': `Bearer ` + token,
                                    'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                                }
                            }
                        ).then(function(response){
                            setStreamerList(streamerList => [...streamerList,response.data]);
                        })
                    })
                    setStream(response.data);
                })
            })
    }, [])
    useEffect(() => {
        console.log(streamerList)
        if(streamerList.length == streamers.length){
            setLoad(false)
        }
    }, [streamerList]);
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
                          <Route path="/" element={<Home stream={stream}/>}/>
                          <Route path="/stream" element={<Player stream={stream}/>}/>
                          <Route path="/team" element={<Team streamers={streamerList}/>}/>
                          <Route path="/planing" element={<Planing streamers={streamerList}/>}/>
                      </Routes>
                      <Footer />
                  </BrowserRouter>
              </div>
          }
      </>
  );
}

export default App;
