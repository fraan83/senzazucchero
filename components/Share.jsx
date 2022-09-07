import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TumblrShareButton,
  tumblrIcon,
} from 'next-share';

export default function Share() {
  return (
    <div className="centralize">
      <FacebookShareButton
        url={'https://senzazucchero.rocks'}
        quote={'senzazucchero internet radio.'}
        hashtag={'#senzazucchero'}

      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={'https://senzazucchero.rocks'}
        quote={'senzazucchero internet radio.'}
        hashtag={'#senzazucchero'}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>


      <style>

      </style>
    </div>
  )
}