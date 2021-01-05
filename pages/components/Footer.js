import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="row pl-4">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <img src="images/logo-blanco.svg" alt="TheEvenet" />
                            <p>Capulet es una plataforma de soluciones en administración de datos y comunicación que se adapta a tus necesidades, comunica y conecta de una manera eficaz, certera, intuitiva y oportuna.</p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Enlaces y Noticias</h4>
                            <ul>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/"><a>Home</a></Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/como-funciona"><a>Cómo Funciona</a></Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/como-funciona"><a>Nosotros</a></Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/como-funciona"><a>Servicios</a></Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/como-funciona"><a>Términos y condiciones</a></Link>
                                </li>
                                <li>
                                    <i className="fa fa-angle-right"></i> 
                                    <Link href="/como-funciona"><a>Política de Privacidad</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Próximos Eventos</h4>
                            <ul>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Calendario</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Exponentes</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Servicios</a></li>
                                <li><i className="fa fa-angle-right"></i> <a href="#">Usuarios</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contacto</h4>
                            <p>CDMX, México <br />535022<br />México <br /><strong>Teléfono:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@example.com<br /></p>

                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; 2019 - 2021 <strong>CAPULET MÉXICO</strong>. Todos Los Derechos Reservados.
                </div>
            </div>
        </footer>
    )
}