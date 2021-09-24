import Link from 'next/link';
import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

import { useEntries } from '@/lib/swr-hooks';

export default function Administrador() {

    const { entries, isLoading } = useEntries();

    if (isLoading) {
        return(
            <div>
                LOADING
            </div>
        )
    };

    console.log(entries);

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
 Bienvenido a su panel de afiliado</h2>
                    <h3><i className="fa fa-angle-right"></i> EVENTOS CONTRATADOS</h3>
                    <div className="row">
                        
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body admin">
                                    <div className="capsulaimg">
                                        <img src="https://capuletbeta.com/neurogeriatria2021/images/2021_fondo.jpg" alt="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" title="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" className="adminCard" />
                                    </div>
                                    <h5 className="card-title text-muted text-uppercase text-center">3er Simposio de Actualidades en Neurogeriatría 2021</h5>
                                    <h6 className="card-price text-center">29 y 30 de septiembre, 2021</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access"><i className="fa fa-check-square" aria-hidden="true"></i> VER PONENCIAS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body admin">
                                    <div className="capsulaimg">
                                        <img src="https://capuletbeta.com/nutricion2021/images/2021_fondo.jpg" alt="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" title="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" className="adminCard" />
                                    </div>
                                    <h5 className="card-title text-muted text-uppercase text-center">CURSO
NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA</h5>
                                    <h6 className="card-price text-center">15 y 16 de octubre, 2021</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn paquetes" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access"><i className="fa fa-plus-square" aria-hidden="true"></i> VER PAQUETES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body admin">
                                    <div className="capsulaimg">
                                        <img src="https://capuletbeta.com/nutricion/images/nutricion1.jpg" alt="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" title="CURSO NUTRICIÓN CLÍNICA BASADA EN EVIDENCIA EN GERIATRÍA" className="adminCard" />
                                    </div>
                                    <h5 className="card-title text-muted text-uppercase text-center">XXXV CONGRESO INTERNACIONAL AMGG</h5>
                                    <h6 className="card-price text-center">16 al 19 de noviembre 2021</h6>
                                    <hr />
                                    <div className="text-center">
                                        <button type="button" className="btn" data-toggle="modal" data-target="#buy-ticket-modal" data-ticket-type="standard-access"><i className="fa fa-check-square" aria-hidden="true"></i> VER PONENCIAS</button>
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