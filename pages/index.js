import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CAPULET APP</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div className="container">
          <div className="row">
            <h1>PROYECTO CAPULET</h1>
          </div>
        </div>
      </main>
      <footer>
        <p>2020 - Todos los Derechos Reservados.</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: font-family: 'Quicksand', sans-serif;
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
          font-family: font-family: 'Quicksand', sans-serif !important;
        }

        h1 {
          font-family: font-family: 'Quicksand', sans-serif !important;
        }
      `}</style>
    </div>
  )
}
