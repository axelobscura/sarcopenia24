import { useState } from "react"
import ModalPayment from "./ModalPayment"

export default function Paquetes() {

    const [paquete, setPaquete] = useState(['médicos', 1500]);

    const crearPaquete = (tipo) => {
        if(tipo === 'uno'){
            setPaquete(['médicos', 1500])
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
                    <h4 className="text-center mb-0"><b>35 CONGRESO INTERNACIONAL AMGG 2021</b></h4>
                    <p>Selecciona alguno de nuestros paquetes y obtenga grandes beneficios.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                            <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Médicos, Gerontólogos y Especialidades Afines</h5>
                                <h6 className="card-price text-center">$ 1,500.00</h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Acceso a todas las conferencias en vivo y ondemand</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Constancia con valor curricular de 40 horas</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Chat en vivo</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Opción a 3 y 6 Meses sin intereses</li>
                                    {/*
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                    */}
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
                                <h5 className="card-title text-muted text-uppercase text-center">Estudiantes, Personal de Enfermería y Cuidadores</h5>
                                <h6 className="card-price text-center">$ 1,000.00</h6>
                                <hr />
                                <ul className="fa-ul">
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>Acceso a todas las conferencias en vivo y ondemand</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Constancia con valor curricular de 40 horas</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Chat en vivo</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Opción a 3 y 6 Meses sin intereses</li>
                                    {/*
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                    */}
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
                                <hr />
                                <ul className="fa-ul">
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>Acceso a todas las conferencias en vivo y ondemand</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Constancia con valor curricular de 40 horas</li>
                                    <li><span className="fa-li"><i className="fa fa-check"></i></span>Chat en vivo</li>
                                    {/*
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>Workshop Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>After Party</li>
                                    */}
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