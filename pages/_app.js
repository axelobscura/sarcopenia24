import React from 'react';
import Script from 'next/script';
import Router from 'next/router';
import App from 'next/app';
import Layout from './components/Layout';
import { UserProvider } from '../UserContext';

export default class MyApp extends App {
    state = {
        usuario: null,
        nombre: null
    };
    componentDidMount = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.setState({
                usuario
            })
        }
    };
    signIn = (usuario, password) => {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);
        this.setState(
            {
                usuario: usuario,
                password: password
            },
            () => {
                Router.push('/administrador');
            }
        );
    };
    signOut = () => {
        localStorage.removeItem('usuario');
        this.setState({
            usuario: null
        });
        Router.push('/');
    };
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Script
                    strategy='lazyOnload'
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script id='ga-analytics'>
                    {
                    `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `
                    }
                </Script>
                <UserProvider value={{ usuario: this.state.usuario, signIn: this.signIn, signOut: this.signOut }}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserProvider>
            </>
        )
    }
}
