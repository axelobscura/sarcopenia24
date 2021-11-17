import { useContext } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../UserContext';
import Link from 'next/link';

export default function Header() {
    const { usuario, signOut } = useContext(UserContext);
    const router = useRouter();
    return (
        <header id="header" className={router.pathname == "/programa" || router.pathname == "/registro" ? "header-scrolled programa" : "header-scrolled"}>
            <div className="container-fluid">
                <div id="logo" className="pull-left">
                    {usuario ?
                        <Link href="/administrador">
                            <a><img src="images/logo-blanco.svg" alt="" title="" style={{ minWidth: '200px' }} /></a>
                        </Link>
                        :
                        <Link href="/">
                            <a><img src="images/logo-blanco.svg" alt="" title="" style={{ minWidth: '200px' }} /></a>
                        </Link>
                    }
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className={router.pathname == "/" ? "menu-active" : ""}><Link href="/"><a><i className="fa fa-angle-right"></i> INICIO</a></Link></li>
                        <li className={router.pathname == "/programa" ? "menu-active" : ""}><Link href="/programa"><a><i className="fa fa-angle-right"></i> PROGRAMA DE ACTIVIDADES</a></Link></li>
                        {usuario ?
                            <>
                            <li className={router.pathname == "/como-funciona" ? "menu-active" : ""}><Link href="/como-funciona"><a><i className="fa fa-angle-right"></i> CURSOS</a></Link></li>
                            <li className={router.pathname == "/como-funciona" ? "menu-active" : ""}><Link href="/como-funciona"><a><i className="fa fa-angle-right"></i> SU PERFIL DE USUARIO</a></Link></li>
                            </>
                            :
                            ''
                        }
                        
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
                        {usuario ?
                            <>
                                <li className="buy-tickets"><Link href="/administrador"><a>PANEL</a></Link></li>
                                <li className="buy-tickets"><a onClick={signOut}>{usuario} | SALIR</a></li>
                            </>
                            :
                            <li className="buy-tickets"><Link href="/registro"><a>INGRESAR</a></Link></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}