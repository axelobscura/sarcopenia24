import { useContext } from 'react';
import UserContext from '../components/UserContext';
import Link from 'next/link';

export default function MenuUsuario() {
    const { usuario, signOut } = useContext(UserContext);
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p activo d-flex"><span className="lnr lnr-user"></span> {usuario}</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p"><span className="lnr lnr-chevron-right"></span> Panel de Control</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p activo"><span className="lnr lnr-chevron-right"></span> Calendario de Actividades</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p"><span className="lnr lnr-chevron-right"></span> Eventos y Conferencias</a>
                    </Link>
                </li>
            </ul>
            <style global jsx>{`
                ul.nav {
                    display:flex;
                    flex-direction: column;
                    margin-left: 20px;
                }
                li {
                    display: flex;
                    align-items: center;
                    margin: 0;
                }
                li a.nav-link-p {
                    background: #0e1b47;
                    width:100%;
                    color:#fff;
                    padding: 15px;
                    padding-left:20px;
                    margin-bottom:2px;
                    font-weight:100;
                    transition: all 1s;
                    font-size: 0.8rem;
                }
                li a.nav-link-p.activo {
                    background: #F82149;
                    font-weight:900;
                }
                li a.nav-link-p:hover {
                    background: #F82149;
                }
                span.lnr {
                    background: #111;
                    padding: 5px;
                    color: #fff;
                    border-radius: 30px;
                    margin-right: 5px;
                    border: 2px solid #F81F49;
                }
            `}</style>
        </div>
    )
}