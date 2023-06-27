import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Loader from './components/Loader';
import { usePrograma } from '../lib/swr-hooks';
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
    const { programa, isLoadingPrograma } = usePrograma();

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
                    <div className="col-md-9">
                        <div className="cubrenlace">
                        <img src="/images/sello_amgg.png" className="img-fluid" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{ 'width': '100%' }} />
                        </div>
                        <ReactPlayer
                            className='react-player'
                            url={`https://www.youtube.com/watch?v=HmHzSxaifbU?rel=0;autoplay=1`}
                            width="100%"
                            height="100%"
                            loop='true'
                            playing='true'
                            controls='true'
                            config={{
                                youtube: {
                                    playerVars: { 
                                        showinfo: 0 
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="col-md-3 chat">
                        <h2>CHAT</h2>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <style global jsx>{`
                body {
                    background: #04091B;
                }
                .ytp-copylink-title {
                    display: none !important;
                }
            `}</style>
            
        </section>
    )
}