import React, { Component } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <>
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

                <Header />
                <main>{children}</main>
                <Footer />

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
            </>
        );
    }
}

export default Layout;