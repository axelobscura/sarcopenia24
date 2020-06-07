import { useState, useContext } from 'react';
import UserContext from '../components/UserContext';
import Link from 'next/link';

export default function Header() {
    const { usuario, signOut } = useContext(UserContext);
    return (
        <header id="header" className="header-scrolled" style={{ background: '#04091A' }}>
            <div className="container-fluid">
                <div id="logo" className="pull-left">
                    <Link href="/">
                        <a><img src="images/logo-blanco.svg" alt="" title="" style={{ minWidth: '200px' }} /></a>
                    </Link>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><Link href="/"><a>Home</a></Link></li>
                        {/* 
                        <li><a href="#about">About</a></li>
                        <li><a href="#speakers">Speakers</a></li>
                        <li><a href="#schedule">Schedule</a></li>
                        <li><a href="#venue">Venue</a></li>
                        <li><a href="#hotels">Hotels</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#supporters">Sponsors</a></li>
                        <li><a href="#contact">Contact</a></li>
                        */}
                        {usuario !== "" ?
                            <li className="buy-tickets"><a onClick={signOut}>LOGOUT</a></li>
                            :
                            <li className="buy-tickets"><Link href="/registro"><a>LOGIN | REGISTRO</a></Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}