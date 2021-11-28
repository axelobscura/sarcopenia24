export default function Chat() {
    return (
        <div className="form-group chat">
            <form>
                <textarea id="w3review" name="w3review" rows="4" />
                <input type="submit" value="PUBLICAR COMENTARIO" className="btn_chat" />
            </form>
        </div>
    )
}