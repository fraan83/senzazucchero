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
        <div>
<FacebookShareButton
  url={'https://senzazucchero.rocks'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#senzazucchero'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
<TwitterShareButton
  url={'https://senzazucchero.rocks'}
  quote={'next-share is a social share buttons for your next React apps.'}
  hashtag={'#senzazucchero'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
 
        </div>
    )
}