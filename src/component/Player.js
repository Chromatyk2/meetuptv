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
                'https://api.twitch.tv/helix/streams?user_login=Chromatyk',
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

        </>

    );
}

export default Player;
