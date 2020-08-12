import MenuUsuario from './components/MenuUsuario';
import Calendario from './components/Calendario';

export default function Administrador() {

    return (
        <section id="administrador" className="section-bg wow fadeInUp m-0 p-0" style={{ paddingTop: '200px' }}>
            <div className="container-fluid" style={{background: '#fff'}}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src="images/logo-amgg.png" alt="" style={{ width: '350px', padding: '20px'}} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="tarjeta">
                            <div className="bkg"></div>
                            <h1>AMGG TV</h1>
                            <img src="https://images.pexels.com/photos/3758756/pexels-photo-3758756.jpeg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tarjeta">
                            <div className="bkg"></div>
                            <h1>PONENCIAS</h1>
                            <img src="https://images.pexels.com/photos/3082452/pexels-photo-3082452.jpeg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="tarjeta">
                            <div className="bkg"></div>
                            <h1>ALIADOS ESTRATÉGICOS</h1>
                            <img src="https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="tarjeta">
                            <div className="bkg"></div>
                            <h1>PROGRAMA ACDÉMICO</h1>
                            <img src="https://images.pexels.com/photos/273153/pexels-photo-273153.jpeg" className="img-fluid" alt="" />
                        </div>
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