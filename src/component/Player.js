import React,{useState, useEffect} from 'react';
import Axios from 'axios'


function Player() {
    const [stream, setStream] = useState(null);

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
                'https://api.twitch.tv/helix/streams?user_login=asarhell',
                {
                    headers: {
                        'Authorization': `Bearer ` + response.data.access_token,
                        'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                    }
                }
            ).then(function (response) {
                setStream(response.data);
            })
        })
    }, [])
    return (
        <>
            {stream &&
                <div className="twitch">
                    <div className="twitch-video">
                        <iframe
                            src="https://player.twitch.tv/?channel=asarhell&parent=meetuptv.netlify.app&autoplay=true&muted=false"
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
                            src="https://www.twitch.tv/embed/asarhell/chat?parent=meetuptv.netlify.app"
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
