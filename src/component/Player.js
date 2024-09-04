import React,{useState, useEffect} from 'react';
import Axios from 'axios'


function Player() {
    const [stream, setStream] = useState(null);

    useEffect(() => {
        Axios.get(
            'https://api.twitch.tv/helix/streams?user_login=Chromatyk',
            {
                headers:{
                    'Authorization': `Bearer p09h2c299pn8ojiro3aezbh14bp7wv`,
                    'Client-Id': '4srh1li6udcsg3j7ej1kyphbl33n7o'
                }
            }
        ).then(function(response){
            setStream(response.data);
        })
    }, [])
    return (
        <>

        </>

    );
}

export default Player;
