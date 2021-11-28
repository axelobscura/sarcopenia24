import Mensaje from "./Mensaje"

export default function Chat() {

    return (
        <div className="form-group chat">
            <form>
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