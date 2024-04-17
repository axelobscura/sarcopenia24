import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  },[]);

  return (
    <>
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <h1>III SIMPOSIO LATINOAMERICANO DE ACTUALIDADES EN FRAGILIDAD Y SARCOPENIA</h1>
          <h2 className="mt-3 mb-1" style={{'color':'#ffffff',fontSize:'4rem',padding:'20px',fontWeight:'bold',}}>{status === 'success' ? '¡Se ha registrado con éxito!' : '18 y 19 de abril, 2024'}</h2>
          <p className="m-0 text-white" style={{background:'#29add4',padding:'10px'}}>CONSTANCIA CON VALOR CURRICULAR</p>
          {status === 'success' ? <p className="mb-1 pt-0">¡BIENVENIDO!</p> : <p className="mb-1 p-3 dirigido" style={{'color':'#ffffff',background:'#0585a8',padding:'20px',fontWeight:'100',textTransform:'uppercase'}}>Dirigido a Médicos Generales, Médicos internistas, Médicos Familiares, Geriatras, Gerontólogos<br/>Nutriólogos, Estudiantes, Personal de Enfermería, Cuidadores y especialidades afines</p>}
          <div className="d-flex">
            <Link href="/registro" className="about-btn" style={{'background':'#151515'}}>INGRESAR AL SIMPOSIO</Link>
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
