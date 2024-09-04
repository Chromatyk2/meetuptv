import React,{useState, useEffect} from 'react';
import Axios from 'axios'


function Player() {
    const [stream, setStream] = useState(null);

    useEffect(() => {
        Axios.get(
            'https://api.twitch.tv/helix/streams?user_login=Chromatyk',
            {
                headers:{
                    'Authorization': `Bearer ${cookies.token.access_token}`,
                    'Client-Id': process.env.REACT_APP_CLIENT_ID
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
