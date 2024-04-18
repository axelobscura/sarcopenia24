import { useState, useContext, useEffect } from "react";
import useSWR, { useSWRConfig } from 'swr';
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";
import Loader from './Loader';

import { useMensajes } from '../../lib/swr-hooks';

export default function Chat({ posts, tipo }) {
    const { mutate } = useSWRConfig()
    const [mensajelocal, setMensajelocal] = useState('');
    let { mensajes, isLoadingMensajes } = useMensajes();
    const { usuario, nombre } = useContext(UserContext);

    async function submitHandler(e) {
        e.preventDefault();
        let elusuario = e.target.usuario.value;
        let elmensaje = e.target.mensaje.value;
        let seccion = "29 de junio";
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
          elmensaje = '';
          mutate('/api/get-mensajes');
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
                <label htmlFor="mensaje" style={{color:'#fff'}}>Comentario y/o Pregunta:</label>
                <input type="hidden" name="usuario" value={nombre} />
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escriba su comentario aquí..." required/>
                <input type="submit" value="ENVIAR COMENTARIO" className="btn_chat" />
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