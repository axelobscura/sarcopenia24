import { useRouter } from 'next/router';
import MenuAdminEvento from '../components/MenuAdminEvento';
import ReactPlayer from 'react-player';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function Salon() {
  const router = useRouter();
  const { tipo } = router.query;
  return (
      <section id="administrador" className="section-bg wow fadeInUp m-0 p-0">
        <div className="container-fluid">
          <div className="row vh-80">
            <MenuAdminEvento />
            <div className="col-md-9 vh-80">
              <div className="row vh-100">
                <h2 className="tipoevento"><ArrowRightCircle /> {tipo === "geriatria" ? 'SALÓN 1 - GERIATRÍA' : 'SALÓN 2 - GERONTOLOGÍA'}</h2>
                <ReactPlayer 
                  className='react-player'
                  url='https://www.youtube.com/watch?v=FhRKmIeRQj8gv?rel=0;autoplay=1'
                  width='100%'
                  height='100vh'
                  loop={true}
                  playing={true}
                  config={{
                    youtube: {
                      playerVars: { 
                        showinfo: 0,
                        modestbranding: 0
                      }
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