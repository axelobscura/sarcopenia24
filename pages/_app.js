import React from 'react';
import Router from 'next/router';
import App from 'next/app';
import Layout from './components/Layout';
import { UserProvider } from '../UserContext';
import "react-multi-carousel/lib/styles.css";

export default class MyApp extends App {
    state = {
        usuario: null,
        nombre: null,
        a_paterno: null,
    };
    componentDidMount = () => {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            this.setState({
                usuario
            })
        }
    };
    signIn = (usuario, password, nombre, a_paterno) => {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('a_paterno', a_paterno);
        this.setState(
            {
                usuario: usuario,
                nombre: nombre,
                a_paterno: a_paterno,
            },
            () => {
                Router.push('/administrador');
            }
        );
    };
    
    signOut = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('password');
        localStorage.removeItem('nombre');
        localStorage.removeItem('a_paterno');
        this.setState({
            usuario: null,
            nombre: null,
            a_paterno: null,
        });
        Router.push('/');
    };
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserProvider value={{ usuario: this.state.usuario, nombre: this.state.nombre, signIn: this.signIn, signOut: this.signOut }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        )
    }
}
