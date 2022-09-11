import Head from 'next/head'
import RadioEmbedded from '../components/RadioEmbedded'
import Share from '../components/Share'
import Messages from '../components/Messages'
import { useState, useEffect } from "react"

export default function Home() {

  const radiolizeAPI = 'https://studio19.radiolize.com/api/nowplaying'

  const [showPosts, setshowPosts] = useState();

  let displayData;
  function pullJson() {
    fetch(radiolizeAPI)
      .then(response => response.json())
      .then(responseData => {
        var radiosenzazucchero = responseData.filter(x => x.station.id == 58);

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
        setshowPosts(displayData);
        console.log(radiosenzazucchero);
       */
      })
    //return;
  }

  function twitterPosts() {

  }

  useEffect(() => {
    pullJson();
    twitterPosts();
  })
  return (
    <div className="container">
      <Head>
        <title>senzazucchero - radio </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta property="og:url" content="https://www.senzazucchero.rocks/" />
        <meta property="og:title" content="SenzaZucchero - internet radio cafè" />
        <meta property="og:image" content="https://www.senzazucchero.rocks/ms-icon-144x144.png" />
        <meta name="description" content="Senza Zucchero is radio web internet senza zuccheri aggiunti! senzazucchero rocks! " />
        <meta property="og:description" content="internet radio cafè senza zucchero" />
        <meta property="og:type" content="music:creator" />
 

        <meta property="og:locale" content="it_IT" />


      </Head>

      <main>
        <h2 className="title">
          welcome to
        </h2>
        <h1 className="name"><i className="greencolor">senza</i>zucchero</h1>
        <h4 className="subname">
          internet radio cafè
        </h4>
        <div>

          <RadioEmbedded></RadioEmbedded>
        </div>
        <div className="centralize">
          <Share></Share>
          <br></br>
          <img className="imginvisible" src="senzazuccherologo.png" alt="senzazucchero internet radio" height="200px" width="200px"></img>
        </div>
        <div className="centralize topsub">
          <Messages></Messages>
        </div>

      </main><footer>
        <img src="senzazuccherologo.png" alt="senzazucchero internet radio" height="150px" width="150px"></img>
      </footer><style jsx>{`



        .container {
          min-height: 10vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 1.8rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: -2rem;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .name{
          line-height: 1.15;
          font-size: 3rem;
        }
        .subname{
          position: relative;
          top: -3em;
        }


        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }


        .greencolor{
          color: green;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        footer img{
          position: relative;
          bottom: 0px;
      
        }

        .imginvisible{
          visibility:hidden;
          display:none;
        }
      
      `}</style><style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
#twitter-widget-0{
  heigh:40px!important;
}
        .centralize{
          text-align: center;
  
          }
  .topsub{
    position: relative;
    top: -24px;
  }
          @font-face {
            font-family: Caveat;
            src: url(Caveat/Caveat-VariableFont_wght.ttf);
          }
          
          h2 {
            font-family: Caveat;
          }
          
          button {
            margin: 0.5rem;
          }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
