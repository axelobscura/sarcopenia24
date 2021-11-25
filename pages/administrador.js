import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CardCurso from './components/CardCurso';
import MenuAdmin from './components/MenuAdmin';
import Loader from './components/Loader';
import UserContext from '../UserContext';
import { useEntries, useCursos } from '../lib/swr-hooks';

export default function Administrador() {
    const router = useRouter();
    //const { entries, isLoading } = useEntries();
    const { usuario } = useContext(UserContext);
    const { cursos, isLoadingCursos } = useCursos();
    if (isLoadingCursos && !cursos) {
        return(
            <Loader/>
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
        <section id="administrador" className="section-bg wow fadeInDown m-0 p-0 mt-4 pt-5">
            <div className="container-fluid">
                <div className="row">
                    <MenuAdmin/>
                    <div className="col-md-9">
                        {/*<h2><i className="fa fa-user-circle-o mr-3" aria-hidden="true"></i>Bienvenido {usuario}</h2>*/}
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <Link href={`/evento/congreso2021`}>
                                    <img src="https://capuletbeta.com/congreso2021/images/congreso2021_a.jpg" className="img-fluid" alt="35 congreso internacional AMGG" title="35 congreso internacional AMGG" />
                                </Link>
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