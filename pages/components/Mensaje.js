export default function Mensaje({usuario, mensaje, seccion, time}){
    return(
        <div className="mensaje">
            <p className="fecha"><small>{time}</small></p>
            <p className="elusuario">{usuario}</p>
            <p>{mensaje}</p>
        </div>
    )
}