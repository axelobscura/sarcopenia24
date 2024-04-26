import { useState, useContext, useEffect } from 'react';
import Link from 'next/dist/client/link';
import ReactPlayer from 'react-player';
import Loader from './components/Loader';
import { usePrograma } from '../lib/swr-hooks';
import Chat from './components/Chat';
import UserContext from '../UserContext';
import { useRouter } from 'next/router';
import { ArrowDownCircle, ArrowRightCircle } from 'react-bootstrap-icons';
import Carousel from "react-multi-carousel";

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
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

export default function Administrador() {
    const router = useRouter();
    const { usuario, signOut } = useContext(UserContext);
    const { programa, isLoadingPrograma } = usePrograma();
    const [ dia, setDia ] = useState('sjqfdr14JPU');
    
    console.log(programa);

    useEffect(() => {
        if (!usuario) {
            router.push('/');
        }
    }, [])

    if (isLoadingPrograma && !programa) {
        return (
            <Loader />
        )
    };

    return (
        <section id="administrador" className="section-bg wow fadeInDown m-0 p-0" style={{ 'paddingTop': '100px' }}>
            <div className="container-fluid">
            <div className="row vh-80">
                {/*<MenuAdminEvento />*/}
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12 p-0 m-0 mb-1 tarjetaevento">
                            <h2 style={{textAlign:'center',color:'#fff',fontWeight:'bold',paddingTop:'30px'}}>¡BIENVENIDOS!</h2>
                            <h3 style={{textAlign:'center',color:'#fff',fontWeight:'100',paddingBottom:'0px'}}>III SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN SARCOPENIA Y FRAGILIDAD</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 p-0 mb-3 m-0 tarjetaevento">
                            <a href={`https://amgg.com.mx/diplomas/diplomapdf24.php?email=${usuario}`} target="_blank">DESCARGUE SU CONSTANCIA AQUÍ <ArrowRightCircle /></a>
                        </div>
                    </div>
                    <div className="row prog">
                        <div className="col-md-12">
                        <h3><div><ArrowRightCircle/> JUEVES 18 DE ABRIL 2024</div></h3>
                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                        >
                            {programa.filter(name => name.dia == "18 ABRIL").map(cc => {
                                if(cc.video){
                                    return(
                                        <Link href={`/salon/${cc.video}`}>
                                            <div className='programaimg'>
                                                <img 
                                                    src='/images/bkg.jpg'
                                                    alt={cc.titulo}
                                                    title={cc.tema}
                                                />
                                                <div className='tit-lamx'>
                                                    <h5>{cc.titulo}</h5>
                                                    <p style={{color:'#fff',marginBottom:'0'}}>{cc.ponente}</p>
                                                    <p style={{marginTop:'0'}}>{cc.pais}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })}
                        </Carousel>
                        </div>
                    </div>

                    <div className="row prog">
                        <div className="col-md-12">
                        <h3><div><ArrowRightCircle/> VIERNES 19 DE ABRIL 2024</div></h3>
                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                        >
                            {programa.filter(name => name.dia == "19 ABRIL").map(cc => {
                                if(cc.video){
                                    return(
                                        <Link href={`/salon/${cc.video}`}>
                                            <div className='programaimg'>
                                                <img 
                                                    src='/images/bkg.jpg'
                                                    alt={cc.titulo}
                                                    title={cc.tema}
                                                />
                                                <div className='tit-lamx'>
                                                    <h5>{cc.titulo}</h5>
                                                    <p style={{color:'#fff',marginBottom:'0'}}>{cc.ponente}</p>
                                                    <p style={{marginTop:'0'}}>{cc.pais}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            })}
                        </Carousel>
                        </div>
                    </div>
                
                </div>
            </div>
            </div>
            <style global jsx>{`
                body {
                    background: #0585a8;
                }
                .ytp-copylink-title, ytp-pause-overlay-container {
                    display: none !important;
                }
                .ytp-expand-pause-overlay .ytp-pause-overlay {
                    display: none !important;
                }
            `}</style>
            
        </section>
    )
}