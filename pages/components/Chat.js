import { useState, useContext, useEffect } from "react";
import { Check2Circle } from 'react-bootstrap-icons';
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";
import Loader from './Loader';

import { useMensajes } from '../../lib/swr-hooks';

export default function Chat({tipo}) {
    const [mensajelocal, setMensajelocal] = useState('');
    const { mensajes, isLoadingMensajes } = useMensajes();
    const { usuario } = useContext(UserContext);

    async function submitHandler(e) {
        e.preventDefault();
        let elusuario = e.target.usuario.value;
        let elmensaje = e.target.mensaje.value;
        let seccion = "general";
        try {
          const res = await fetch('/api/create-entry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                elusuario,
                elmensaje,
                seccion,
            }),
          })
          const json = await res.json();
          if (!res.ok) throw Error(json.message);
          useMensajes();
        } catch (e) {
          throw Error(e.message)
        }
    }

    if(isLoadingMensajes && !mensajes){
        return(
            <Loader />
        )
    }
    
    return (
        <div className="form-group chat">
            <form onSubmit={submitHandler}>
                <input type="hidden" name="usuario" value={usuario} />
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escriba su mensaje aquí..." />
                <button type="submit" className={`btn_chat ${tipo}`}><Check2Circle className="mr-2"/>DAR CLICK AQUÍ PARA PUBLICAR COMENTARIO</button>
            </form>
            <div className="chat-container">
                {mensajes.map((msj, i) => (
                    <Mensaje 
                        key={i} 
                        usuario={msj.nombre}
                        mensaje={msj.mensaje}
                        seccion={msj.seccion}
                        time={msj.timestamp}
                    />
                ))}
            </div>
        </div>
    )
}