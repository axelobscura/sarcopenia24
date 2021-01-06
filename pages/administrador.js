import Link from 'next/link';
import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

export default function Administrador() {

    return (
        <section id="administrador" className="section-bg wow fadeInUp m-0 p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 text-center m-0 p-0">
                        <h3>MENÚ DE USUARIO</h3>
                        <ul>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> PERFIL DE USUARIO</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> CALENDARIO</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> CONFERENCIAS</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> SIMPOSIOS</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> CONSTANCIAS</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> AFILIACIONES</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> BIBLIOTECA DE DOCUMENTOS</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> DESCUENTOS</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a><i className="fa fa-angle-right"></i> PATROCINADORES</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h2><i className="fa fa-user-circle-o mr-3" aria-hidden="true"></i>
 Bienvenido a su panel de control.</h2>
                    </div>
                </div>
            </div>
            
            <style global jsx>{`
                body {
                background: #04091B;
                }
            `}</style>
        </section>
    )
}