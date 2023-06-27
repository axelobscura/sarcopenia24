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
                    <div className="cubrenlace"></div>
                    <div className="plyr__video-embed" id="player">
                    {/* 
                    <iframe
                        src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&iv_load_policy=0&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay"
                        style={{"width": "100%;"}}
                    ></iframe>
                    */}
                    <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <style global jsx>{`
                body {
                    background: #04091B;
                }
                #player {
                    width: 100%;
                    height: 900px;
                }
            `}</style>
        </section>
    )
}