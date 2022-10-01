import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TwitterShare,
  TumblrShareButton,
  tumblrIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import { useState, useEffect } from "react"

export default function Share() {

  const radiolizeAPI = 'https://studio19.radiolize.com/api/nowplaying'
  const [showPosts, setshowPosts] = useState();

  let displayData;
  let playNow;

  function pullRadioJson() {
    fetch(radiolizeAPI)
      .then(response => response.json())
      .then(responseData => {
        var radiosenzazucchero = responseData.filter(x => x.station.id == 58);

        displayData = radiosenzazucchero.map(function (data) {
          return (
            playNow = data.now_playing.song.title + " di " + data.now_playing.song.artist
          )
        })
        setshowPosts(displayData);
        //console.log(showPosts);

      })
    //return;
  }
  useEffect(() => {
    pullRadioJson();
  })

  return (
    <div className="centralize">
      <FacebookShareButton
        url={'https://senzazucchero.rocks'}
        title={'Sto ascoltando ' + showPosts + ' su radio #senzazucchero'}
        hashtag={'#senzazucchero'}
        
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={'https://senzazucchero.rocks'}
        title={'Sto ascoltando ' + showPosts + ' su radio #senzazucchero'}
        hashtags={'#webradio'}
  
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton

        url={'senzazucchero.rocks'}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton
        title={'Sto ascoltando ' + showPosts + ' su radio #senzazucchero'}
        url={'senzazucchero.rocks'} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton

        url={'senzazucchero.rocks'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        title={'Sto ascoltando ' + showPosts + ' su radio #senzazucchero'}
        url={'senzazucchero.rocks'}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>


      <style>

      </style>
    </div>
  )
}