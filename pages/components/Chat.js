import { useState } from "react";
import Mensaje from "./Mensaje";
import UserContext from "../../UserContext";

export default function Chat() {
    const [mensaje, setMensaje] = useState('');
    //const { usuario } = useContext(UserContext);
    const enviarMensaje = (e) => {
        e.preventDefault();
        let mensaje = e.target.mensaje.value;
        setMensaje(mensaje);
    }
    console.log(mensaje);
    return (
        <div className="form-group chat">
            <form onSubmit={enviarMensaje}>
                <textarea id="mensaje" name="mensaje" rows="4" />
                <input type="submit" value="PUBLICAR COMENTARIO" className="btn_chat" />
            </form>
            <div className="chat-container">
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
                <Mensaje />
            </div>
        </div>
    )
}