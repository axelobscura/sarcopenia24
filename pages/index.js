import Link from 'next/link';
import { useRouter } from 'next/router';
import Paquetes from './components/Paquetes';
import Patrocinadores from './components/Patrocinadores';

export default function Home() {
  const router = useRouter();
  const {status} = router.query;
  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">

          <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'550px'}} />
          <h1 className="mt-0 mb-1 pb-0">{status === 'success' ? '¡Gracias su registro fué exitoso!' : '2, 3, 4 y 5 de DICIEMBRE'}</h1>
          <p className="mb-1 p-3">Dirigido a Médicos Generales, Médicos internistas, Médicos Familiares, Geriatras,<br/>Nutriólogos, Estudiantes, Enfremer@s y especialidades afines</p>
          {/* 
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          */}
          <div className="d-flex">
          {status === 'success' ? 
            <Link href="/registro"><a className="about-btn" style={{'background':'#3b6b00'}}>INGRESAR A SU PANEL DE USUARIO</a></Link>
            :
            <Link href="#buy-tickets"><a className="about-btn scrollto">REGISTRO AL CONGRESO INTERNACIONAL</a></Link>
          }
          </div>
        </div>
      </section>
      <Paquetes />
      <Patrocinadores />
      <style jsx>{`
        .intro-container h1 {
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}
