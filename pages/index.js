import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CAPULET APP</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main style={{ margin: 0, padding: 0 }}>
        <div className="container">
          <div className="row flex-column">
            <div align="center">
              <img src="/images/logo.png" alt="CAPULET" title="CAPULET" style={{ width: '200px' }} />
            </div>
            <hr />
            <h1 style={{ fontFamily: 'Oswald' }}>PROYECTO CAPULET</h1>
            <hr />
            <p>contenidos</p>
          </div>
        </div>
      </main>

      <footer>
        <p className="p-0 m-0">2020 - PROYECTO CAPULET. Todos los Derechos Reservados.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Oswald', sans-serif;
          font-weight: 100;
        }

        p {
          font-family: 'Oswald', sans-serif;
        }

        main {
          padding: 5rem 0;
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
          font-family: 'Oswald', sans-serif;
        }

        h1 {
          font-family: 'Quicksand', sans-serif;
          font-weight: 100;
          font-size: 3em;
          margin: 0;
          padding: 0;
        }

      `}</style>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </div>
  )
}
