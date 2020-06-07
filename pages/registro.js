import { useState, useContext } from 'react';
import UserContext from './components/UserContext';
import Router from 'next/router';

export default function Registro() {
    const { signIn } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleUsuario = (e) => {
        e.preventDefault();
        let usuario = e.target.nameUsuario.value;
        let password = e.target.passwordUsuario.value;
        console.log(usuario);
        if (usuario != '' || password != '') {
            signIn(usuario, password);
        } else {
            setMessage('Please enter your username and password');
        }
        /*
        Router.push({
            pathname: '/administrador',
            query: { name: 'usuario' },
        })
        */
    };

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log('Registro');
    };

    return (
        <section id="contact" className="section-bg wow fadeInUp">

            <div className="container">

                <div className="section-header mt-5">
                    <h2>Login | Registro</h2>
                    <p>Ingrese o register sus datos para poder hacer uso a la plataforma.</p>
                </div>

                <div className="row contact-info">
                    <div className="col-md-6">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>LOGIN DE USUARIOS</h3>
                            {message != '' && <div className="message">{message}</div>}
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
            `}</style>
        </section>
    )
}