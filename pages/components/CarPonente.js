export default function CardPonente({horario, dia, salon, modulo, ponente, tema, institucion, especialidad, elmomento, bandera}) {
  return (
    <div className="row schedule-item">
      <div className="col-md-3"><time className={elmomento}>{horario}</time></div>
      <div className="col-md-9 d-flex align-items-center">
        <div className="speaker">
          <img src={`https://flagcdn.com/${bandera}.svg`} alt="Congreso Internacional AMGG 2021" title="Congreso Internacional AMGG 2021" />
        </div>
        <div>
        <h4 style={{'textTransform':'uppercase'}}>{tema}</h4>
        <h5 style={{'fontWeight': 'bold','margin':'0','fontSize':'0.9rem'}} className={elmomento}>{ponente}</h5>
        {tema === "RECESO" ? 
          ""
          :
          <p>Especialidad: {especialidad}</p>
        }
        </div>
      </div>
    </div>
  )
}