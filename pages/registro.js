import { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/dist/client/link';
import UserContext from '../UserContext';
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

        let url = `https://webinarimcyc.com/testemail/usuario24.php`;
        
        await axios.post(url, JSON.stringify({
            email: email,
            token: password,
        }))
        .then(async (response) => {
            console.log('RESPUESTA, ', response.data);
            if (response.data[0] === "exito") {
                signIn(email, password, response.data[2], response.data[3]);
                setMensaje('¡Bienvenido, ingresando a su cuenta!');
                setEsusuario(true);
            } else if (response.data === "fallo") {
                setMensaje('¡Lo sentimos, sus datos son incorrectos!');
                setEsusuario(false);
            } else {
                setMensaje('¡Lo sentimos, sus datos son incorrectos!');
                setEsusuario(false);
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
                    <div className="col-md-6 offset-sm-0 offset-md-3">
                        <div className="section-header mt-2 text-center">
                            <div align="center">
                                <img src="/images/sello_amgg.png" className="img-fluid" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{ 'width': '250px' }} />
                            </div>
                            <hr />
                            <h2>Ingreso de usuarios</h2>
                        </div>
                        <div className="contact-address">
                            <h3 style={{color:'#ffffff',background:'#29add4',padding:'10px'}}>III SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA</h3>
                            <h1 style={{color:'#111111',fontWeight:'bold'}}>{mensaje}</h1>
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
                background-color: #29add4;
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