import Link from 'next/link';

export default function MenuUsuario() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p activo"><i class="fa fa-angle-right"></i> Panel de Control</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p"><i class="fa fa-angle-right"></i> Calendario de Actividades</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/registro">
                        <a className="nav-link-p"><i class="fa fa-angle-right"></i> Eventos y Conferencias</a>
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
                }
                li a.nav-link-p.activo {
                    background: #F82149;
                    font-weight:900;
                }
                li a.nav-link-p:hover {
                    background: #F82149;
                }
            `}</style>
        </div>
    )
}