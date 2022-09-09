import { useState, useEffect } from "react"
export default function Radiolize() {

    const radiolizeAPI = 'https://studio19.radiolize.com/api/nowplaying'
    const [showPosts, setshowPosts] = useState();
 
    let displayData;
    function pullJson() {
        fetch(radiolizeAPI)
            .then(response => response.json())
            .then(responseData => {
                /*
                var messaggi = responseData.messages.sort((a, b) => a - b);
                var maxMessaggi = messaggi.slice(0, 10)
                displayData = maxMessaggi.map(function (data) {
                    return (
                        <div key={data.id}>
                            <p> {new Date(data.created_at).toLocaleDateString('it-IT')} <b>{data.name} : </b>
                                "<i>{data.text}</i>"
                            </p>
                            <hr></hr>
                        </div>
                    )
                })
                setshowPosts(displayData);*/
                console.log(responseData);
               
            })
        //return;
    }

    useEffect(() => {
        pullJson();
    })
    return (
        <div className="centralize">
      
        </div>
    )

}