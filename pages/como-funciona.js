import Link from 'next/link';
import Paquetes from './components/Paquetes';

export default function comoFunciona() {
  return (
    <>
      <section id="qs">
        <div className="qs-container wow fadeIn">
          <h1 className="mb-4 pb-0">¿Cómo funciona Capulet?</h1>
          <h3 style={{'color':'#fff'}}><small>Capulet esta diseñada específicamente para garantizar el manejo de una base de datos en tiempo real,<br/>creando soluciones para el administrador y beneficiando a cada uno de los usuarios que requieren un servicio integral.</small></h3>
          <hr/>
          <div className="pasos">
          <p><span className="num">1</span> SE SOLICITA AL USUARIO NOMBRE, CORREO ELECTRÓNICO Y PAGO OPORTUNO.</p>
          <p><span className="num">2</span> CON ESTOS DATOS SE GENERA SU PERFIL DE USUARIO.</p>
          <p><span className="num">3</span> LE LLEGA CORREO ELECTRÓNICO AL USUARIO CON QR Y LINK PARA INGRESAR A SU SESIÓN</p>
          <p><span className="num">4</span> EL USUARIO INGRESA A SU SESIÓN Y TERMINA DE COMPLETAR LOS DATOS DEL FORMULARIO.</p>
          <p><span className="num">5</span> TENDRÁ ACCESO A TODOS LOS EVENTOS A LOS QUE SE ENCUENTRE INSCRITO.</p>
          <p><span className="num">6</span> AL TERMINAR EL EVENTO EL USUARIO PODRÁ DESCARGAR SU CONSTANCIA.</p>
        </div>
        </div>
        
      </section>

      <style jsx>{`
      `}</style>
    </>
  )
}
