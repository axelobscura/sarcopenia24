import { useRouter } from 'next/router';
import MenuAdminEvento from '../components/MenuAdminEvento';
import ReactPlayer from 'react-player';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function Salon() {
  const router = useRouter();
  const { tipo } = router.query;
  console.log(tipo);
  let elvideo = tipo;
  let titulo = "";
  if(tipo === "uno-geriatria"){
    elvideo = 'OlRftXc5aTY';
    titulo = "2 DE DICIEMBRE - GERIATRÍA";
  } else if(tipo === "uno-gerontologia"){
    elvideo = 'OlRftXc5aTY';
    titulo = "2 DE DICIEMBRE - GERONTOLOGÍA";
  } else if(tipo === "dos-geriatria"){
    elvideo = 'mT1nhqEmmrs';
    titulo = "3 DE DICIEMBRE - GERIATRÍA";
  } else if(tipo === "dos-gerontologia"){
    elvideo = 'yRDc4p-Q10k';
    titulo = "3 DE DICIEMBRE - GERONTOLOGÍA";
  } else if(tipo === "tres-geriatria"){
    elvideo = '7aTdIeu2gEs';
    titulo = "4 DE DICIEMBRE - GERIATRÍA";
  } else if(tipo === "tres-gerontologia"){
    elvideo = 'vbCK_GwtXSY';
    titulo = "4 DE DICIEMBRE - GERONTOLOGÍA";
  } else if(tipo === "cuatro-geriatria"){
    elvideo = 'fVwRXEfZDOQ';
    titulo = "5 DE DICIEMBRE - GERIATRÍA";
  } else if(tipo === "cuatro-gerontologia"){
    elvideo = 'UxOV008jm_g';
    titulo = "5 DE DICIEMBRE - GERONTOLOGÍA";
  }
  return (
      <section id="administrador" className="section-bg wow fadeInUp m-0 p-0">
        <div className="container-fluid">
          <div className="row vh-80">
            <MenuAdminEvento />
            <div className="col-md-9">
              <div className="row">
                <h2 className={`tipoevento ${tipo}`}><ArrowRightCircle /> {titulo}</h2>
                <div className="cubrenlace"></div>
                <ReactPlayer
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=${elvideo}?rel=0;autoplay=1`}
                  width="100%"
                  height="100%"
                  loop='true'
                  playing='true'
                  controls='true'
                  config={{
                      youtube: {
                        playerVars: { showinfo: 0 }
                      }
                  }}
                />
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