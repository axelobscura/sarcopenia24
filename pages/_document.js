import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <link rel="icon" type="image/png" href="/images/sello_amgg.png" />
          <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@100;900&display=swap" rel="stylesheet" />
          <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
          <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
          <link href="/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
          <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
          <link href="/assets/css/style.css" rel="stylesheet" />
          <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-7PED0K7FTH"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/assets/vendor/jquery/jquery.min.js"></script>
                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
                <script src="/assets/vendor/php-email-form/validate.js"></script>
                <script src="/assets/vendor/wow/wow.min.js"></script>
                <script src="/assets/vendor/venobox/venobox.min.js"></script>
                <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
                <script src="/assets/vendor/superfish/superfish.min.js"></script>
                <script src="/assets/vendor/hoverIntent/hoverIntent.js"></script>
                <script async src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js" strategy="beforeInteractive"></script>
                <script>
                    const player = new Plyr('#player');
                </script>
                <script src="/assets/js/main.js"></script>
        </body>
      </Html>
    )
  }
}