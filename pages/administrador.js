import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CardCurso from './components/CardCurso';
import MenuAdmin from './components/MenuAdmin';
import Loader from './components/Loader';
import UserContext from '../UserContext';
import ReactPlayer from 'react-player';
import { useEntries, useCursos } from '../lib/swr-hooks';

export default function Administrador() {
    const router = useRouter();
    //const { entries, isLoading } = useEntries();
    const { usuario } = useContext(UserContext);
    const { cursos, isLoadingCursos } = useCursos();
    if (isLoadingCursos && !cursos) {
        return (
            <Loader />
        )
    };
    const ofertaCursos = cursos.map(curso => (
        <CardCurso
            id={curso.id}
            imagen={curso.imagen}
            titulo={curso.titulo}
            fecha={curso.fecha}
            link={curso.link}
        />
    ));
    console.log(usuario);
    return (
        <section id="administrador" className="section-bg wow fadeInDown m-0 p-0" style={{ 'paddingTop': '100px' }}>
            <div className="container-fluid">
                <div className="row">
                    <MenuAdmin />
                    <div className="col-md-9">
                        {/*<h2><i className="fa fa-user-circle-o mr-3" aria-hidden="true"></i>Bienvenido {usuario}</h2>*/}
                        <div className="row">
                            <div className="col-md-12 d-flex">
                                    <div className="col-md-6 p-0 m-0">
                                        <img src="/images/s11.jpeg" alt="amgg" title="amgg" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6 p-0 m-0">
                                        <img src="/images/s22.jpeg" alt="amgg" title="amgg" className="img-fluid" />
                                    </div>
                                {/* 
                                <div className="cubrenlace"></div>
                                <Link href={`/evento/congreso2021`}>
                                    <ReactPlayer
                                        className='react-player'
                                        url='https://www.youtube.com/watch?v=OlRftXc5aTY?rel=0;autoplay=1'
                                        width="100%"
                                        height="100%"
                                        loop='true'
                                        playing='true'
                                        controls='true'
                                        config={{
                                            youtube: {
                                                preload: true,
                                                playerVars: { showinfo: 1 }
                                            }
                                        }}
                                    />
                                </Link>
                                <p className="nimportante">NOTA IMPORTANTE: Si no puede ver el video por favor recargue la página.</p>
                                */}
                            </div>
                            {/*ofertaCursos*/}
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