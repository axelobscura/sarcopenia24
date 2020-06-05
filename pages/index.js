import Link from 'next/link';
import Paquetes from './components/Paquetes';

export default function Home() {
  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <h1 className="mb-4 pb-0">Soluciones en<br /><span>Administración de Datos</span></h1>
          <p className="mb-4 pb-0">comunica y conecta de una manera eficaz, certera, intuitiva y oportuna.</p>
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          <Link href="/registro"><a className="about-btn scrollto">LOGIN | REGISTRO</a></Link>
        </div>
      </section>

      <Paquetes />

      <style jsx>{`
      `}</style>
    </>
  )
}
