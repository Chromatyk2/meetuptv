import React, {useState} from 'react';


function Team(props) {
    const [list, setList] = useState(props.streamers);
    return (
        <>
            <div style={{width:"100%",display:"flex",justifyContent:"center", flexWrap:"wrap"}}>
                <div style={{width:"75%",display:"flex",justifyContent:"center", flexWrap:"wrap", gap:"50px"}}>
                    {list.length > 0 &&
                        list.map((val, key) => {
                            return (
                                <a href={"https://twitch.tv/"+val.data[0].display_name} target={"_blank"} className={"linkToStreamer"} style={{textAlign:"center",lineHeight:"10px",fontSize:"20px"}}>
                                    <img style={{borderRadius: "100%", width: "150px"}} src={val.data[0].profile_image_url}/>
                                    <p>{val.data[0].display_name}</p>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Team;
