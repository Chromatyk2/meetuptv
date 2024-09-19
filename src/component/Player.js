import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import logo from "../logo.svg";


function Player() {
    const [stream, setStream] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        Axios.post(
            'https://id.twitch.tv/oauth2/token',
            {
                client_id:'4srh1li6udcsg3j7ej1kyphbl33n7o',
                client_secret:'p09h2c299pn8ojiro3aezbh14bp7wv',
                grant_type:"client_credentials"
            }).then(function(response) {
                console.log(response);
            Axios.get(
                'https://api.twitch.tv/helix/streams?user_login=meetup_tv',
                {
                    headers: {
                        'Authorization': `Bearer ` + response.data.access_token,
                        'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                    }
                }
            ).then(function (response) {
                setStream(response.data);
                setLoad(false)
            })
        })
    }, [])
    return (
        <>
            {load ?

                <div className="App-loader">
                    <img src={logo} alt="logo"/>
                </div>
                :
                <div className="twitch">
                    <div className="twitch-video">
                        <iframe
                            src="https://player.twitch.tv/?channel=meetup_tv&parent=meetuptv.netlify.app&autoplay=true&muted=false"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true"
                            height="720"
                            width="1280">
                        </iframe>
                    </div>
                    <div className="twitch-chat">
                        <iframe
                            frameBorder="0"
                            scrolling="no"
                            src="https://www.twitch.tv/embed/meetup_tv/chat?parent=meetuptv.netlify.app"
                            height="100%"
                            width="100%">
                        </iframe>
                    </div>
                </div>
            }
        </>

    );
}

export default Player;
