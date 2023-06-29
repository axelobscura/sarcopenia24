import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Paquetes from './components/Paquetes';

export default function Home() {
  const router = useRouter();
  const {status} = router.query;

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      router.push('/administrador');
    } else {
      router.push('/');
    }
  }, []);

  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <h1>II SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA</h1>
          <h2 className="mt-3 mb-1 pb-0 font-weight-bold" style={{'color':'#f72249'}}>{status === 'success' ? '¡Se ha registrado con éxito!' : '29 y 30 de junio, 2023'}</h2>
          <p className="m-0 text-white">CONSTANCIA CON VALOR CURRICULAR</p>
          {status === 'success' ? <p className="mb-1 pt-0">¡BIENVENIDO!</p> : <p className="mb-1 pt-0 dirigido">Dirigido a Médicos Generales, Médicos internistas, Médicos Familiares, Geriatras, Gerontólogos<br/>Nutriólogos, Estudiantes, Personal de Enfermería, Cuidadores y especialidades afines</p>}
          {/* 
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          */}
          <div className="d-flex">
            <Link href="/registro"><a className="about-btn" style={{'background':'#151515'}}>INGRESAR AL SIMPOSIO</a></Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .intro-container h1 {
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}
