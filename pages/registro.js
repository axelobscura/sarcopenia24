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
        <section id="contact" className="section-bg wow fadeInUp mt-5">

            <div className="container-fluid p-5">

                

                <div className="row contact-info">
                    
                    <div className="col-md-6">
                        <div className="section-header mt-2 text-center">
                            <h1>BIENVENIDOS!</h1>
                            <h2>Login de usuarios</h2>
                            <p>Ingrese o register sus datos para poder hacer uso a la plataforma.</p>
                        </div>
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
                        <div align="center">
                            <img src="/images/logo-congreso21.png" className="img-fluid" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" />
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