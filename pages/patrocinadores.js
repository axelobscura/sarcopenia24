import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuAdmin from './components/MenuAdmin';
import UserContext from '../UserContext';

export default function Patrocinadores() {
    const router = useRouter();
    const { usuario } = useContext(UserContext);

    return (
        <section id="administrador" className="section-bg wow fadeInDown m-0 p-0" style={{ 'paddingTop': '100px' }}>
            <div className="container-fluid">
                <div className="row">
                    <MenuAdmin />
                    <div className="col-md-9 patrocinadores dos">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="logospatro">
                                  <img src="https://capuletbeta.com/congreso2021/images/logo-hiequilibrio.jpg" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid"/>
                                  <img src="https://capuletbeta.com/nutricion/images/Avicola.jpeg" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="https://capuletbeta.com/nutricion2021/images/logo-abbot.png" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="https://capuletbeta.com/nutricion/images/logo-amsa.png" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="https://capuletbeta.com/nutricion/images/logo-angeles.png" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="https://capuletbeta.com/nutricion/images/Fresenius.jpeg" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="https://capuletbeta.com/nutricion/images/Fresubin.png" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="/images/logo_affective.jpg" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                  <img src="/images/logo_deasa.png" alt="CAPULET SOLUCIONES DE ADMINISTRACIÓN DE DATOS Y COMUNICACIÓN" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style global jsx>{`
                body {
                    background: #04091B;
                }
                .col-md-9.patrocinadores {
                  background: #fff;
                }
            `}</style>
        </section>
    )
}