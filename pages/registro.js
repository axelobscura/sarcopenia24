import { useState, useContext } from 'react';
import UserContext from '../UserContext';
import Router from 'next/router';

export default function Registro() {
    const [userMsg, setUserMsg] = useState('');
    const { signIn } = useContext(UserContext);

    const handleUsuario = async (e) => {
        e.preventDefault();
        let email = e.target.nameUsuario.value;
        let password = e.target.passwordUsuario.value;

        console.log(email);

        let res = await fetch(`/api/get-usuario?email=${email}`);
        let json = await res.json()
        //if (!res.ok) throw Error(json.message)
        if (!res.ok) {
            setUserMsg("El nombre de usuario no es correcto!");
        } else {
            signIn(email, password);
        }
    };

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log('Registro');
    };

    return (
        <section id="contact" className="section-bg wow fadeInUp">

            <div className="container">

                <div className="section-header mt-2 text-center">
                    <h1>BIENVENIDOS!</h1>
                    <h2>Login | Registro</h2>
                    <p>Ingrese o register sus datos para poder hacer uso a la plataforma.</p>
                </div>

                <div className="row contact-info">
                    <div className="col-md-6">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>INGRESO DE USUARIOS</h3>
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
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>REGISTRO DE USUARIOS</h3>
                            <hr />
                            <form onSubmit={handleRegistro}>
                                <div className="form-group col-md-12">
                                    <input type="text" name="nameRegistro" className="form-control" id="nameRegistro" placeholder="Nombre de Usuario" data-rule="minlen:4" data-msg="Ingrese por lo menos 4 letras" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" name="emailRegistro" id="emailRegistro" placeholder="Correo Electrónico" data-rule="email" data-msg="Por favor ingrese un correo eletrónico válido" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="password" className="form-control" name="passwordRegistro" id="passwordRegistro" placeholder="Contraseña" />
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center"><button type="submit" className="btn">Enviar datos de registro</button></div>
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