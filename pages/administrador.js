import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CardCurso from './components/CardCurso';
import MenuAdmin from './components/MenuAdmin';
import Loader from './components/Loader';
import UserContext from '../UserContext';
import Carousel from "react-multi-carousel";

import ReactPlayer from 'react-player';
import { useEntries, useCursos, usePrograma } from '../lib/swr-hooks';
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function Administrador() {
    const router = useRouter();
    const { entries, isLoading } = useEntries();
    const { programa, isLoadingPrograma } = usePrograma();
    const { usuario } = useContext(UserContext);
    const { cursos, isLoadingCursos } = useCursos();
    if (isLoadingCursos && !cursos) {
        return (
            <Loader />
        )
    };
    if (isLoadingPrograma && !programa) {
        return (
            <Loader />
        )
    };
    //console.log(programa);
    const ofertaCursos = cursos.map(curso => (
        <CardCurso
            id={curso.id}
            imagen={curso.imagen}
            titulo={curso.titulo}
            fecha={curso.fecha}
            link={curso.link}
        />
    ));
    console.log(programa);
    return (
        <section id="administrador" className="section-bg wow fadeInDown m-0 p-0" style={{ 'paddingTop': '100px' }}>
            <div className="container-fluid d-none">
                <div className="row">
                    <MenuAdmin />
                    <div className="col-md-9">
                        {/*<h2><i className="fa fa-user-circle-o mr-3" aria-hidden="true"></i>Bienvenido {usuario}</h2>*/}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12 p-0 m-0 tarjetaevento">
                                        <a href={`https://capuletbeta.com/apis/congreso/diploma?usuario=${usuario}`} target="_blank">DESCARGUE SU CONSTANCIA AQUÍ <ArrowRightCircle /></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/uno-geriatria">
                                            <a>SALÓN 1<br /><span className="lafe">2 DE DICIEMBRE</span><br />GERIATRÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/uno-gerontologia">
                                            <a>SALÓN 2<br /><span className="lafe">2 DE DICIEMBRE</span><br />GERONTOLOGÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/dos-geriatria">
                                            <a>SALÓN 1<br /><span className="lafe">3 DE DICIEMBRE</span><br />GERIATRÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/dos-gerontologia">
                                            <a>SALÓN 2<br /><span className="lafe">3 DE DICIEMBRE</span><br />GERONTOLOGÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/tres-geriatria">
                                            <a>SALÓN 1<br /><span className="lafe">4 DE DICIEMBRE</span><br />GERIATRÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/tres-gerontologia">
                                            <a>SALÓN 2<br /><span className="lafe">4 DE DICIEMBRE</span><br />GERONTOLOGÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/cuatro-geriatria">
                                            <a>SALÓN 1<br /><span className="lafe">5 DE DICIEMBRE</span><br />GERIATRÍA</a>
                                        </Link>
                                    </div>
                                    <div className="col-md-6 p-0 m-0 tarjetaevento">
                                        <Link href="/salon/cuatro-gerontologia">
                                            <a>SALÓN 2<br /><span className="lafe">5 DE DICIEMBRE</span><br />GERONTOLOGÍA</a>
                                        </Link>
                                    </div>
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
            <div className="container-fluid tetes">
                <div className="row">
                    <div className="col-md-12 p-0 m-0 tarjetaevento">
                        <a href={`https://capuletbeta.com/apis/congreso/diploma?usuario=${usuario}`} target="_blank">DESCARGUE SU CONSTANCIA AQUÍ <ArrowRightCircle /></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> PRE-CONGRESO</div><br/></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(2 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "2" && name.tema !== "RECESO").map(cc => (
                            <Link href={`/salon/${cc.video}`}>
                                <div className='programaimg'>
                                    <img 
                                        src='/images/portada-precongreso.jpg' 
                                        alt={cc.tema}
                                        title={cc.tema}
                                    />
                                    <div className='tit-lamx'>
                                        <h5>{cc.tema}</h5>
                                        <p>{cc.ponente}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 1 - GERIATRÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(3 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "3" && name.salon == "1" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => {
                            if(cc.imagen){
                                return(
                                    <Link href={`/salon/${cc.video}`}>
                                        <div className='programaimg'>
                                            <img 
                                                src='/images/portada-geriatria.jpg'
                                                alt={cc.tema}
                                                title={cc.tema}
                                            />
                                            <div className='tit-lamx'>
                                                <h5>{cc.tema}</h5>
                                                <p>{cc.ponente}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 2 - GERONTOLOGÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(3 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "3" && name.salon == "2" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => {
                            if(cc.imagen){
                                return(
                                    <Link href={`/salon/${cc.video}`}>
                                        <div className='programaimg'>
                                            <img 
                                                src='/images/portada-neuro.jpg'
                                                alt={cc.tema}
                                                title={cc.tema}
                                            />
                                            <div className='tit-lamx'>
                                                <h5>{cc.tema}</h5>
                                                <p>{cc.ponente}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 1 - GERIATRÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(4 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "4" && name.salon == "1" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => (
                            <Link href={`/salon/${cc.video}`}>
                                <div className='programaimg'>
                                    <img 
                                        src='/images/portada-geriatria.jpg'
                                        alt={cc.tema}
                                        title={cc.tema}
                                    />
                                    <div className='tit-lamx'>
                                        <h5>{cc.tema}</h5>
                                        <p>{cc.ponente}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 2 - GERONTOLOGÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(4 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "4" && name.salon == "2" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => (
                            <Link href={`/salon/${cc.video}`}>
                                <div className='programaimg'>
                                    <img 
                                        src='/images/portada-neuro.jpg'
                                        alt={cc.tema}
                                        title={cc.tema}
                                    />
                                    <div className='tit-lamx'>
                                        <h5>{cc.tema}</h5>
                                        <p>{cc.ponente}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 1 - GERIATRÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(5 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                    >
                        {programa.filter(name => name.dia == "5" && name.salon == "1" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => (
                            <Link href={`/salon/${cc.video}`}>
                                <div className='programaimg'>
                                    <img 
                                        src='/images/portada-geriatria.jpg'
                                        alt={cc.tema}
                                        title={cc.tema}
                                    />
                                    <div className='tit-lamx'>
                                        <h5>{cc.tema}</h5>
                                        <p>{cc.ponente}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3><div><ArrowRightCircle/> SALÓN 2 - GERONTOLOGÍA</div></h3>
                    <p className='mb-2 ml-2'><span className='rojo'>(5 DE DICIEMBRE)</span></p>
                    <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        transitionDuration={500}
                    >
                        {programa.filter(name => name.dia == "5" && name.salon == "2" && name.tema !== "RECESO" && name.tema !== "Inauguración").map(cc => (
                            <Link href={`/salon/${cc.video}`}>
                                <div className='programaimg'>
                                    <img 
                                        src='/images/portada-neuro.jpg'
                                        alt={cc.tema}
                                        title={cc.tema}
                                    />
                                    <div className='tit-lamx'>
                                        <h5>{cc.tema}</h5>
                                        <p>{cc.ponente}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
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