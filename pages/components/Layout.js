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
                    <title>35 Congreso Internacional AMGG 2021 | Asociación Mexicana de Gerontología y Geriatría A.C.</title>
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@100;900&display=swap" rel="stylesheet" />
                    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                    <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
                    <link href="/assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
                    <link href="/assets/css/style.css" rel="stylesheet" />
                </Head>

                <Header />

                <main>{children}</main>

                <Footer />

                <script src="/assets/vendor/jquery/jquery.min.js"></script>
                <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
                <script src="/assets/vendor/php-email-form/validate.js"></script>
                <script src="/assets/vendor/wow/wow.min.js"></script>
                <script src="/assets/vendor/venobox/venobox.min.js"></script>
                <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
                <script src="/assets/vendor/superfish/superfish.min.js"></script>
                <script src="/assets/vendor/hoverIntent/hoverIntent.js"></script>
                <script src="/assets/js/main.js"></script>
            </>
        );
    }
}

export default Layout;