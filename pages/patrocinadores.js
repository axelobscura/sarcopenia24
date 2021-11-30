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
                    <div className="col-md-9 patrocinadores">
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                
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