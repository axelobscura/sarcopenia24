import { useState, useContext } from "react";
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";
import Loader from './Loader';

import { useMensajes } from '../../lib/swr-hooks';

export default function Chat() {
    const [mensajelocal, setMensajelocal] = useState('');
    const { mensajes, isLoadingMensajes } = useMensajes();
    const { usuario } = useContext(UserContext);

    async function submitHandler(e) {
        e.preventDefault();
        let elusuario = e.target.usuario.value;
        let elmensaje = e.target.mensaje.value;
        try {
          const res = await fetch('/api/create-entry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                elusuario,
                elmensaje,
            }),
          })
          const json = await res.json()
          if (!res.ok) throw Error(json.message)
        } catch (e) {
          throw Error(e.message)
        }
    }

    if (isLoadingMensajes && !mensajes) {
        return(
            <Loader/>
        )
    };
    
    console.log(mensajes);
    return (
        <div className="form-group chat">
            <form onSubmit={submitHandler}>
                <input type="hidden" name="usuario" value={usuario} />
                <textarea id="mensaje" name="mensaje" rows="4" />
                <input type="submit" value="PUBLICAR COMENTARIO" className="btn_chat" />
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