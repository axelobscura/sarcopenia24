export default function Registro() {
    return (
        <section id="contact" className="section-bg wow fadeInUp mt-5 pt-5">

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
                            <hr />
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group col-md-12">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre de Usuario" data-rule="minlen:4" data-msg="Ingrese por lo menos 4 letras" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="password" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center"><button type="submit">Ingresar a su cuenta</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-address">
                            <i className="ion-ios-location-outline"></i>
                            <h3>REGISTRO DE USUARIOS</h3>
                            <hr />
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-group col-md-12">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre de Usuario" data-rule="minlen:4" data-msg="Ingrese por lo menos 4 letras" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="password" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center"><button type="submit">Enviar datos de registro</button></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}