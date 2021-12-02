import { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/dist/client/link';
import UserContext from '../UserContext';
import Router from 'next/router';
import axios from "axios";

export default function Registro() {
    const [userMsg, setUserMsg] = useState('');
    const [ esusuario, setEsusuario ] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const { signIn } = useContext(UserContext);

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);

    async function handleUsuario(e) {
        e.preventDefault();
        let email = e.target.nameUsuario.value;
        let password = e.target.passwordUsuario.value;
        setMensaje('Enviando sus datos');

        let url = `https://capuletbeta.com/apis/congreso/usuario.php`;
        
        await axios.post(url, JSON.stringify({
            email: email,
            token: password,
        }))
        .then(async (response) => {
            if (response.data.mensaje === "exito") {

                if(response.data.cs !== ""){
                    const checkoutSession = await axios.post('/api/create-stripe-intent', {
                        item: response.data.cs,
                    });
                    
                    if(checkoutSession.data.status == "succeeded"){
                        signIn(email, password);
                        setMensaje('¡Bienvenido, ingresando a su cuenta!');
                        setEsusuario(true);
                    } else if(checkoutSession.data.status == "requires_payment_method") {
                        setMensaje('¡Lo invitamos a realizar su pago para ingresar al evento!');
                    } else if(checkoutSession.data.status == "open") {
                        setMensaje('¡Lo invitamos a realizar su pago para ingresar al evento!');
                    } else {
                        setMensaje('¡Lo invitamos a realizar su pago para ingresar al evento!');
                    }
                } else {
                    setMensaje('¡Lo invitamos a realizar su pago para ingresar al evento!');
                }
                
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
        <section id="contact" className="section-bg wow fadeInDown mt-5">
            <div className="container-fluid">
                <div className="row contact-info">
                    <div className="col-md-6 offset-3">
                        <div className="section-header mt-2 text-center">
                            <div align="center">
                                <img src="/images/logo-congreso21.png" className="img-fluid" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{ 'width': '250px' }} />
                            </div>
                            <hr />
                            <h2>Ingreso de usuarios</h2>
                            <p>Ingrese a su plataforma personalizada del congreso.</p>
                            
                        </div>
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>POR FAVOR INGRESE SUS DATOS DE ACCESO</h3>
                            <h1>{mensaje}</h1>
                            <p className={userMsg !== "" ? `errorLog` : ``}>{userMsg}</p>
                            <hr />
                            <form onSubmit={handleUsuario}>
                                <div className="form-group col-md-12">
                                    <input type="email" name="nameUsuario" className="form-control" id="nameUsuario" placeholder="Correo Electrónico" data-rule="email" data-msg="Ingrese su correo electrónico" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="password" className="form-control" name="passwordUsuario" id="passwordUsuario" placeholder="Contraseña" />
                                    <div className="validate"></div>
                                </div>

                                <div className="text-center"><button type="submit" className="btn">Ingresar a su cuenta</button></div>
                                <div className="text-center mt-3 recuperar"><Link href="/recuperar"><p><small>¿Olvidó sus datos de ingreso?, De click aquí.</small></p></Link></div>
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