export default function RadioEmbedded() {
    return (

        <div>
            <iframe src="https://studio19.radiolize.com/public/senzazucchero/embed?theme=light" ></iframe>

            <style jsx>
            {`
        iframe {
          min-height: 20vh;
          min-width: 40vh;
          padding: 0 0.5rem;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
      `}</style>

  
            </div>
        
    )
};