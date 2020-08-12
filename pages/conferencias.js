import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

export default function Administrador() {

    return (
        <section id="administrador" className="section-bg wow fadeInUp m-0 p-0" style={{ paddingTop: '200px' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <MenuUsuario />
                    </div>
                    <div className="col-md-9">
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