import { useContext } from 'react';
import { useRouter } from 'next/router';
import UserContext from '../../UserContext';
import Link from 'next/link';

export default function Header() {
    const { usuario, signOut } = useContext(UserContext);
    const router = useRouter();
    return (
        <header id="header" className={router.pathname == "/programa" || router.pathname == "/registro" || router.pathname == "/recuperar" ? "header-scrolled programa" : "header-scrolled"}>
            <div className="container-fluid">
                <div id="logo" className="pull-left">
                    {usuario ?
                        <Link href="/administrador">
                            <a><img src="/images/logo_header.jpg" alt="II SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA" title="capulet méxico" style={{ width: '350px' }} /></a>
                        </Link>
                        :
                        <Link href="/">
                            <a><img src="/images/logo_header.jpg" alt="II SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA" title="capulet méxico" style={{ width: '350px' }} /></a>
                        </Link>
                    }
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className={router.pathname == "/" ? "menu-active" : ""}><Link href="/"><a><i className="fa fa-angle-right"></i> INICIO</a></Link></li>
                        <li className={router.pathname == "/programa" ? "menu-active" : ""}><a href="https://amgg.com.mx/sarcopenia2023/" target="_blank"><i className="fa fa-angle-right"></i> PROGRAMA ACADÉMICO</a></li>
                        {usuario ?
                            <>
                                <li className="buy-tickets"><a style={{'background':'#333'}}>{usuario}</a></li>
                                <li className="buy-tickets"><Link href="/administrador"><a>PANEL</a></Link></li>
                                <li className="buy-tickets"><a onClick={signOut}>SALIR</a></li>
                            </>
                            :
                            <li className="buy-tickets"><Link href="/registro"><a>INGRESAR</a></Link></li>
                        }
                        <li>
                            <a href="https://www.amgg.com.mx/" target="_blank" style={{'padding':'0'}}>
                                <img src="/images/logo-amgg-blanco.png" alt="Asociación Mexicana de geriatría y Gerontología" title="Asociación Mexicana de geriatría y Gerontología" style={{'width':'55px'}} />
                            </a>
                        </li>
                        <li>
                            <img src="/images/logo_geriatrics.png" alt="Asociación Mexicana de geriatría y Gerontología" title="Asociación Mexicana de geriatría y Gerontología" style={{'width':'42px'}} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}