import { useState, useContext } from 'react';
import Link from 'next/dist/client/link';
import UserContext from '../UserContext';
import Router from 'next/router';

export default function Recuperar() {
    return (
        <section id="contact" className="section-bg wow fadeInUp mt-5">
            <div className="container-fluid">
                <div className="row contact-info">
                    <div className="col-md-6 offset-3">
                        <div className="section-header mt-2 text-center">
                            <div align="center">
                                <img src="/images/logo-congreso21.png" className="img-fluid" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'250px'}} />
                            </div>
                            <hr/>
                            <h2>Recuperar sus datos de ingreso</h2>
                        </div>
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>POR FAVOR INGRESE SU CORREO ELECTRÓNICO</h3>
                            <hr />
                            <form>
                                <div className="form-group col-md-12">
                                    <input type="email" name="nameUsuario" className="form-control" id="nameUsuario" placeholder="Correo Electrónico" data-rule="email" data-msg="Ingrese su correo electrónico" />
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center"><button type="submit" className="btn">Recuperar su contraseña</button></div>
                                <div className="text-center mt-3 recuperar"><Link href="/registro"><p><small>De click aquí para ingresar a su cuenta.</small></p></Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .btn {
                font-size: 15px;
                border-radius: 50px;
                padding: 10px 40px;
                transition: all 0.2s;
                background-color: #f82249;
                border: 0;
                color: #fff;
                text-transform: uppercase;
                font-weight: bold;
            }
            p.errorLog {
                font-weight: bold;
                text-transform: uppercase;
                color: #f00;
                background: #f82249;
                padding: 10px;
                color: #fff !important;
                border-radius: 20px;
            }
            `}</style>
        </section>
    )
}