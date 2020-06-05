import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CAPULET APP</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />>
      </Head>

      <main>
        <Header />

        <section id="intro">
          <div className="intro-container wow fadeIn">
            <h1 className="mb-4 pb-0">Soluciones en<br /><span>Administración</span> de Datos</h1>
            <p className="mb-4 pb-0">comunica y conecta de una manera eficaz, certera, intuitiva y oportuna.</p>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
            <a href="#about" className="about-btn scrollto">Registrarse</a>
          </div>
        </section>


      </main>

      <style jsx>{`
      `}</style>

      <script src="assets/vendor/jquery/jquery.min.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/wow/wow.min.js"></script>
      <script src="assets/vendor/venobox/venobox.min.js"></script>
      <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="assets/vendor/superfish/superfish.min.js"></script>
      <script src="assets/vendor/hoverIntent/hoverIntent.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  )
}
