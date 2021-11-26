export default function CardPonente({horario, dia, salon, modulo, ponente, tema, institucion, especialidad}) {
  return (
    <div className="row schedule-item">
      <div className="col-md-3"><time>{horario}</time></div>
      <div className="col-md-9">
        {/*
        <div className="speaker">
        <img src="/images/logo-congreso21.png" alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" />
        </div>
        */}
        {tema}
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