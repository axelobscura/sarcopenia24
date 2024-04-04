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
                    <title>III SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA | Asociación Mexicana de Gerontología y Geriatría A.C.</title>
                </Head>



                <main>{children}</main>

                <Footer />

                
            </>
        );
    }
}

export default Layout;