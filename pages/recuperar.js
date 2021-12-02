import { useState, useContext } from 'react';
import Link from 'next/dist/client/link';
import axios from "axios";

export default function Recuperar() {

    const [mensaje, setMensaje] = useState('');

    async function handleRecuperar(e) {
        e.preventDefault();
        let email = e.target.nameUsuario.value;
        setMensaje('Enviando sus datos');

        let url = `https://capuletbeta.com/apis/congreso/recuperar.php`;

        await axios.post(url, JSON.stringify({
            email: email
        }))
        .then(async (response) => {
            if (response.data === "exito") {
                setMensaje('¡Gracias, su contraseña ha sido enviada a su correo!');
                setEsusuario(true);
            } else if (response.data === "fallo") {
                setMensaje('¡Lo sentimos, sus datos son incorrectos!');
                setEsusuario(false);
            } else {
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    }

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
                            <h1>{mensaje}</h1>
                            <hr />
                            <form onSubmit={handleRecuperar}>
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