import { useState } from "react";
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";
import Loader from './Loader';

import { useMensajes } from '../../lib/swr-hooks';

export default function Chat() {
    const [mensajelocal, setMensajelocal] = useState('');
    const { mensajes, isLoadingMensajes } = useMensajes();
    //const { usuario } = useContext(UserContext);
    const enviarMensaje = (e) => {
        e.preventDefault();
        let mensajelocal = e.target.mensaje.value;
        setMensajelocal(mensajelocal);
    }
    if (isLoadingMensajes && !mensajes) {
        return(
            <Loader/>
        )
    };
    console.log(mensajes);
    return (
        <div className="form-group chat">
            <form onSubmit={enviarMensaje}>
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