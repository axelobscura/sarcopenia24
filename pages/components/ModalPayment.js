import { useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";
import Loader from "./Loader";

var formater = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ModalPayment({paquete}) {
  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({
    name: '35 Congreso Internacional AMGG',
    description: 'Dirigido a Médicos Generales, Médicos internistas, Médicos Familiares, Geriatras, Gerontólogos<br/>Nutriólogos, Estudiantes, Personal de Enfermería, Cuidadores y especialidades afines',
    image: 'https://capuletbeta.com/congreso2021/images/2021_logo.png',
    quantity: 1,
    price: 1500,
  });

  useEffect(() => {
    setItem({ ...item, price: paquete[1] });
  }, [paquete]);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);

  if(!paquete){
    return <Loader />;
  }

  const enviarDatos = async (e) => {
    e.preventDefault();

    let nombre = e.target.nombre.value;
    let apaterno = e.target.apaterno.value;
    let amaterno = e.target.amaterno.value;
    let email = e.target.email.value;
    let titulo = e.target.titulo.value;
    let telefono = e.target.telefono.value;
    let nacimiento = e.target.nacimiento.value;
    let sexo = e.target.sexo.value;

    setLoading(true);

    localStorage.setItem('usuario', email);
    
    let url = `https://capuletbeta.com/apis/congreso/registro.php`;

    await axios.post(url, JSON.stringify({
        nombre: nombre,
        apaterno: apaterno,
        amaterno: amaterno,
        email: email,
        titulo: titulo,
        telefono: telefono,
        nacimiento: nacimiento,
        sexo: sexo,
        precio: paquete[1]
      }))
      .then(async (response) => {
          if(response.data === "exito"){
            const stripe = await stripePromise;
            const checkoutSession = await axios.post('/api/create-stripe-session', {
              item: item,
            });
            const result = await stripe.redirectToCheckout({
              sessionId: checkoutSession.data.id,
            });
            if (result.error) {
              alert(result.error.message);
            }
            setEnviado(true);
            setNombre(nombre);
          }else if(response.data === "fallo"){
            setEnviado(false);
          }else{
            setEnviado(true);
          }
      })
      .catch(function (error){
          console.log(error)
      })

      setLoading(false);
      
    };
    
  

  return (
    <div id="buy-ticket-modal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-bold text-uppercase"><b>{paquete[0]}</b></h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div align="center">
              <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" style={{'width':'350px'}} />
              <h3 className="mt-3 mb-0 font-weight-bold" style={{'color':'#f82249'}}>2, 3, 4 y 5 de DICIEMBRE, 2021</h3>
              <h5 className="m-0 p-0 pt-2 font-weight-bold">Constancia con valor curricular de 40 horas</h5>
              <p className="mt-1 mb-2"><small>Su constancia se generará automáticamente con el título elegido<br/>de acuerdo al paquete de inscripción contratado.</small></p>
              <h5 className="m-0 p-0">PRECIO</h5>
              <h3><b>{formater.format(paquete[1])}</b></h3>
              
            </div>
            <hr/>
            {!enviado ? 
              <form onSubmit={enviarDatos}>
                <div className="form-group">
                  <label>*Nombre:</label>
                  <input type="text" className="form-control" name="nombre" placeholder="Ingrese su nombre" required />
                </div>
                <div className="form-group">
                  <label>*Apellido paterno:</label>
                  <input type="text" className="form-control" name="apaterno" placeholder="Ingrese su apellido paterno" required />
                </div>
                <div className="form-group">
                  <label>*Apellido materno:</label>
                  <input type="text" className="form-control" name="amaterno" placeholder="Ingrese su apellido materno" required />
                </div>
                <div className="form-group">
                  <label>*Correo electrónico:</label>
                  <input type="email" className="form-control" name="email" placeholder="Ingrese su correo electrónico" required />
                </div>
                <div className="form-group">
                  <label>*Título:</label>
                  <select id="ticket-type" name="titulo" className="form-control" required>
                    <option value="">-- Seleccione su título --</option>
                    {paquete[1] === 1500 ?
                      <>
                        <option value="Dr">Dr.</option>
                        <option value="Dra">Dra.</option>
                        <option value="Lic">Lic.</option>
                        <option value="Mtro">Mtro.</option>
                        <option value="Mtra">Mtra.</option>
                        <option value="Ing">Ing.</option>
                        <option value="Psic">Psic.</option>
                        <option value="Psiq">Psiq.</option>
                        <option value="Otro">Otro.</option>
                      </>
                    : paquete[1] === 1000 ?
                      <>
                        <option value="Enf">Enf.</option>
                        <option value="Est">Est.</option>
                        <option value="Sr">Sr.</option>
                        <option value="Sra">Sra.</option>
                      </>
                    :
                      <>
                        <option value="Dr">Dr.</option>
                        <option value="Dra">Dra.</option>
                        <option value="Lic">Lic.</option>
                        <option value="Mtro">Mtro.</option>
                        <option value="Mtra">Mtra.</option>
                        <option value="Ing">Ing.</option>
                        <option value="Psic">Psic.</option>
                        <option value="Psiq">Psiq.</option>
                        <option value="Otro">Otro.</option>
                        <option value="Enf">Enf.</option>
                        <option value="Est">Est.</option>
                        <option value="Sr">Sr.</option>
                        <option value="Sra">Sra.</option>
                      </>
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label>Teléfono:</label>
                  <input type="text" className="form-control" name="telefono" placeholder="Ingrese su teléfono" />
                </div>
                <div className="form-group">
                  <label>Fecha de nacimiento:</label>
                  <input type="date" className="form-control" name="nacimiento" />
                </div>
                <div className="form-group">
                  <label>Sexo:</label>
                  <select name="sexo" className="form-control">
                    <option value="">-- Seleccione su sexo --</option>
                    <option value="Femenino">F</option>
                    <option value="Masculino">M</option>
                  </select>
                </div>
                <hr/>
                <div className="text-center">
                  <button type="submit" className="btn">REGISTRARSE</button>
                </div>
              </form>
            : 
              <>
                <h2 className="text-center"><b>¡Gracias {nombre}!</b></h2>
                <h3 className="text-center">Sus datos fueron enviados<br/>con éxito.</h3>
                <p className="text-center">EN BREVE RECIBIRÁ SUS DATOS DE ACCESO A LA PLATAFORMA</p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}