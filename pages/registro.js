import { useState, useContext } from 'react';
import Link from 'next/dist/client/link';
import UserContext from '../UserContext';
import Router from 'next/router';
import axios from "axios";

export default function Registro() {
    const [userMsg, setUserMsg] = useState('');
    const [ esusuario, setEsusuario ] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const { signIn } = useContext(UserContext);

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
            if (response.data === "exito") {
                signIn(email, password);
                setMensaje('¡Bienvenido, ingresando a su cuenta!');
                setEsusuario(true);
            } else if (response.data === "fallo") {
                setEnviado(false);
                setMensaje('¡Lo sentimos, sus datos son incoreectos!');
                setEsusuario(false);
            } else {
                setEnviado(true);
            }
        })
        .catch(function (error) {
            console.log(error)
        })
        /*
        try {
          const res = await fetch('/api/get-usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
          })
          const json = await res.json();
          console.log(res);
          console.log(json);
          if (!res.ok) throw Error(json.message);
          signIn(email, password);
        } catch (e) {
          throw Error(e.message)
        }
        */
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
                            <h3>{mensaje}</h3>
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