import React from 'react';
import Router from 'next/router';
import App from 'next/app';
import Layout from './components/Layout';
import { UserProvider } from '../UserContext';

export default class MyApp extends App {
    state = {
        usuario: null
    };
    componentDidMount = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.setState({
                usuario
            });
        } else {
            Router.push('/');
        }
    };
    signIn = (usuario, password) => {
        console.log('el signin del contexto');
        localStorage.setItem('usuario', usuario);
        console.log('el signinnn del contexto');
        this.setState(
            {
                usuario: usuario
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
            <UserProvider value={{ usuario: this.state.usuario, signIn: this.signIn, signOut: this.signOut }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        )
    }
}
