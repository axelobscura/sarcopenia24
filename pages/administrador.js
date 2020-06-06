import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

export default function Administrador() {
    return (
        <section id="administrador" className="section-bg wow fadeInUp mt-5 pt-5">
            <div className="container-fluid m-0 p-0">
                <div className="row contact-info">
                    <div className="col-md-3 m-0 p-0">
                        <MenuUsuario />
                    </div>
                    <div className="col-md-9 m-0 p-0">
                        <Calendario />
                    </div>
                </div>
            </div>
            <style global jsx>{`
                body {
                background: #04091B;
                }
            `}</style>
        </section>

    )
}