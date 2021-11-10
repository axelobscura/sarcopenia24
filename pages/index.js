import Link from 'next/link';
import Paquetes from './components/Paquetes';
import Patrocinadores from './components/Patrocinadores';

export default function Home() {
  
  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'350px'}} />
          <h1 className="mt-0 mb-1 pb-0">2, 3, 4 y 5 de DICIEMBRE</h1>
          <p className="mb-1 pb-0">Capulet es una plataforma de soluciones en administración de datos y comunicación que se adapta<br/>a sus necesidades, comunica y conecta de una manera</p>
          <p style={{'color':'#f82249','textTransform':'uppercase'}}>eficaz, certera, intuitiva y oportuna</p>
          {/* 
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          */}
          <div className="d-flex">
            <Link href="/registro"><a className="about-btn scrollto">CURSOS Y SEMINARIOS</a></Link>
            <Link href="/registro"><a className="about-btn scrollto">LOGIN | REGISTRO</a></Link>
          </div>
        </div>
      </section>

      <Patrocinadores />

      <Paquetes />

      <style jsx>{`
        .intro-container h1 {
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}
