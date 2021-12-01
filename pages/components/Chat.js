import { useState, useContext, useEffect } from "react";
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";
import Loader from './Loader';

import { useMensajes } from '../../lib/swr-hooks';

export default function Chat({ posts, tipo }) {
    const [mensajelocal, setMensajelocal] = useState('');
    let { mensajes, isLoadingMensajes } = useMensajes();
    const { usuario } = useContext(UserContext);

    console.log('Los posts: '+posts);

    async function submitHandler(e) {
        e.preventDefault();
        let elusuario = e.target.usuario.value;
        let elmensaje = e.target.mensaje.value;
        let seccion = tipo;
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
    
    return (
        <div className="form-group chat">
            <form onSubmit={submitHandler}>
                <input type="hidden" name="usuario" value={usuario} />
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escriba su mensaje aquí..." />
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

export async function getServerSideProps() {
    const res = await fetch('/api/create-entry')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
      revalidate: 1,
    }
  }