import { useState, useEffect } from "react"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Messages() {

    useEffect(() => {

    })
    return (
        <div className="centralize">
            <div>
                <p> <b>Twitta senza zucchero!</b> </p>

            </div>
            <TwitterHashtagButton
                size="large"
                tag={'senzazucchero'}
            />
            <div>
                <div>

                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="zuccherosenza"
                        options={{ tweetLimit: '3', height: 500, width: 400 }}
                    />

                </div>

                <div>
 
                </div>

            </div>

       
        </div>
    )
}