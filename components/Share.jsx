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
  title={'Sto ascoltando radio #senzazucchero '}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
      <PinterestShareButton

        url={'senzazucchero.rocks'}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton

        url={'senzazucchero.rocks'} >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton

        url={'senzazucchero.rocks'} >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton

        url={'senzazucchero.rocks'}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>


      <style>

      </style>
    </div>
  )
}