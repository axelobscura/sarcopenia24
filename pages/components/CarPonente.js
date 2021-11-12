export default function CardPonente({horario, dia, salon, modulo, ponente, tema, institucion, especialidad}) {
  return (
    <div className="row schedule-item">
      <div className="col-md-2"><time>{horario}</time></div>
      <div className="col-md-10">
        <div className="speaker">
          <img src="assets/img/speakers/1.jpg" alt="Brenden Legros" />
        </div>
        <h4 style={{'textTransform':'uppercase'}}>{tema}<br/>
        {tema === "RECESO" ? 
          ""
          :
          <span>{ponente} | {institucion}</span>
        }
        </h4>
        {tema === "RECESO" ? 
          ""
          :
          <p>Especialidad: {especialidad}</p>
        }
        
      </div>
    </div>
  )
}