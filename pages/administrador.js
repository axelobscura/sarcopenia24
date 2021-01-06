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
                    <h3><i className="fa fa-angle-right"></i> EVENTOS CONTRATADOS</h3>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">XXXIV CONGRESO INTERNACIONAL AMGG</h5>
                                    <h6 className="card-price text-center">16 al 19 de noviembre 2020</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">INGRESAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">1<sup>er</sup> Simposio de Sarcopenia y Fragilidad</h5>
                                    <h6 className="card-price text-center">22 y 23 de octubre, 2020</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">INGRESAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                    <h5 className="card-title text-muted text-uppercase text-center">2<sup>o</sup> Simposio de Actualidades en Neurogeriatría</h5>
                                    <h6 className="card-price text-center">24 y 25 de septiembre, 2020</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access">VER PAQUETES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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