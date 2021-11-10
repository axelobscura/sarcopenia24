import { useState } from "react"
import ModalPayment from "./ModalPayment"

export default function Paquetes() {

    const [paquete, setPaquete] = useState([]);

    const crearPaquete = (tipo) => {
        if(tipo === 'uno'){
            setPaquete(['público general', 1500])
        } else if(tipo === 'dos'){
            setPaquete(['estudiantes y enfermeras', 1000])
        } else {
            setPaquete(['becarios', 0])
        }
    };

    return (
        <section id="buy-tickets" className="section-with-bg wow fadeInUp">
            <div className="container">

                <div className="section-header">
                    <h2>PAQUETES</h2>
                    <h4 className="text-center"><b>35 CONGRESO INTERNACIONAL AMGG 2021</b></h4>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Público General</h5>
                                <h6 className="card-price text-center">$ 1,500.00</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Acceso a todas las conferencias</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Constancia de participación</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Promociones</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Chat en vivo</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                    <button 
                                    type="button" 
                                    className="btn" 
                                    data-toggle="modal" 
                                    data-target="#buy-ticket-modal" 
                                    data-ticket-type="standard-access"
                                    onClick={() => crearPaquete('uno')}>REGISTRARSE AQUÍ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Estudiantes y Enfermeras</h5>
                                <h6 className="card-price text-center">$ 1,000.00</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                    <button 
                                    type="button" 
                                    className="btn" 
                                    data-toggle="modal" 
                                    data-target="#buy-ticket-modal" 
                                    data-ticket-type="standard-access"
                                    onClick={() => crearPaquete('dos')}>REGISTRARSE AQUÍ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Becarios</h5>
                                <h6 className="card-price text-center">$0</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Regular Seating</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Coffee Break</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Custom Badge</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Workshop Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>After Party</li>
                                </ul>
                                <hr />
                                <div className="text-center">
                                <button 
                                    type="button" 
                                    className="btn" 
                                    data-toggle="modal" 
                                    data-target="#buy-ticket-modal" 
                                    data-ticket-type="standard-access"
                                    onClick={() => crearPaquete('tres')}>REGISTRARSE AQUÍ</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalPayment
                paquete={paquete}
            />
            
        </section>
    )
}