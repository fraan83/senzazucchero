import { useState, useEffect } from "react"
export default function Messages() {
    const [showPosts, setshowPosts] = useState();
    const apiUrlMessages = 'messages.json';
    let displayData;
    function pullJson() {
        fetch(apiUrlMessages)
            .then(response => response.json())
            .then(responseData => {
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
                console.log(responseData);
                setshowPosts(displayData);
            })
        //return;
    }

    useEffect(() => {
        pullJson();
    })
    return (
        <div className="centralize">
               <div>
                <h5>message box </h5>
                <hr></hr>
                </div> 
                <div>
        {showPosts}
        </div>
 
        </div>
    )
}