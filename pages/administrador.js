import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

export default function Administrador() {

    return (
        <section id="administrador" className="section-bg wow fadeInUp m-0 p-0" style={{ paddingTop: '200px' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>HOLA</h1>
                        <img src="img/logo-amgg.png" alt="" style={{ width: '200px'}} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="tarjeta">
                            <h1>AMGG TV</h1>
                            <img src="https://images.pexels.com/photos/3758756/pexels-photo-3758756.jpeg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
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